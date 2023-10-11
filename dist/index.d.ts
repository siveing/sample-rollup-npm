export type TMetadata = {
    username: string;
    age: number;
    dob: string;
};
export default function getMetaData(username: string): TMetadata;
declare const getMessage: (username: string) => string;
export { getMessage };
