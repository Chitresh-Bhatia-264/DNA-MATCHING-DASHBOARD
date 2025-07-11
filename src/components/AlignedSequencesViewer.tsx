import React from 'react';
import { AlignedSequences } from '../algorithms';

interface AlignedSequencesViewerProps {
  alignedSequences: AlignedSequences;
}

export const AlignedSequencesViewer: React.FC<AlignedSequencesViewerProps> = ({
  alignedSequences,
}) => {
  const { reference, query, alignment, score } = alignedSequences;

  return (
    <div>
      <h3>Aligned Sequences</h3>
      <div>
        <p>Reference: {reference}</p>
        <p>Query: {query}</p>
      </div>
      <pre>
        {alignment.map((pair, index) => (
          <div key={index}>
            <span>{pair.reference}</span>
            <span>{pair.query}</span>
          </div>
        ))}
      </pre>
      <p>Score: {score}</p>
    </div>
  );
};
