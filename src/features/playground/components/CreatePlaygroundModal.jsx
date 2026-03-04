import { useState } from 'react';
import toast from 'react-hot-toast';
import Button from '@/components/ui/Button';
import { useCreatePlaygroundMutation } from '@/features/playground/playgroundApi';

export default function CreatePlaygroundModal() {
  const [name, setName] = useState('');
  const [createPlayground, { isLoading }] = useCreatePlaygroundMutation();

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!name.trim()) return;

    try {
      await createPlayground({ name: name.trim() }).unwrap();
      setName('');
      toast.success('Playground created');
    } catch {
      toast.error('Failed to create playground');
    }
  };

  return (
    <form className="flex gap-2" onSubmit={onSubmit}>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="New playground name"
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Creating...' : 'Create'}
      </Button>
    </form>
  );
}
