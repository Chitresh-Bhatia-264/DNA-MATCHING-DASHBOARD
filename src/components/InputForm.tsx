import React from 'react';

interface InputFormProps {
  reference: string;
  query: string;
  onReferenceChange: (value: string) => void;
  onQueryChange: (value: string) => void;
  onSubmit: () => void;
}

export const InputForm: React.FC<InputFormProps> = ({
  reference,
  query,
  onReferenceChange,
  onQueryChange,
  onSubmit,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="flex flex-col gap-4"
    >
      <div>
        <label htmlFor="reference" className="block mb-2">
          Reference Sequence:
        </label>
        <textarea
          id="reference"
          value={reference}
          onChange={(e) => onReferenceChange(e.target.value)}
          className="w-96 h-24 p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="query" className="block mb-2">
          Query Sequence:
        </label>
        <input
          type="text"
          id="query"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="w-96 p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Align
      </button>
    </form>
  );
};
