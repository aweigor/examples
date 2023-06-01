type ReadOrWrite = 'read' | 'write';
type Bulk = 'bulk' | '';

// Capitalize etc
type Access = `can${Uppercase<ReadOrWrite>}${Capitalize<Bulk>}`;

type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never;

// "READ" | "WRITE" | "READBulk" | "WRITEBulk"
type T = ReadOrWriteBulk<Access>;

type ErrorOrSuccess = 'error' | 'success';

type ResponseT = {
  result: `http${Capitalize<ErrorOrSuccess>}`
}

// httpSuccess
const a: ResponseT = {
  result: 'httpError'
};

export {}