export interface AlignedSequences {
  reference: string;
  query: string;
  alignment: { query: string; reference: string }[];
  score: number;
}

export function KMP(text: string, pattern: string): number[] {
  const matches: number[] = [];
  
  let i = 0;
  let j = 0;
  while (i < text.length) {
    if (text[i] === pattern[j]) {
      if (j === pattern.length - 1) {
        matches.push(i - j);
        j = 0;
      } else {
        j++;
      }
      i++;
    } else {
      j = 0;
      i++;
    }
  }
  return matches;
}

export function NeedlemanWunsch(
  seq1: string,
  seq2: string,
): AlignedSequences {
  
  const alignment: { query: string; reference: string }[] = [];
  let score = 0;
  let i = 0;
  let j = 0;

  while (i < seq1.length || j < seq2.length) {
    if (seq1[i] === seq2[j]) {
      alignment.push({ query: seq1[i], reference: seq2[j] });
      score++;
      i++;
      j++;
    } else if (i < seq1.length) {
      alignment.push({ query: seq1[i], reference: '-' });
      i++;
    } else {
      alignment.push({ query: '-', reference: seq2[j] });
      j++;
    }
  }

  return { reference: seq1, query: seq2, alignment, score };
}
