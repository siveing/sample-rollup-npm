
export type TMetadata = {
    username: string;
    age: number;
    dob: string;
}

export default function getMetaData(username: string): TMetadata {
    return {
        username,
        age: 21,
        dob: '080400'
    }
};

const getMessage = (username: string): string => {
    return `Hello everyone, My name is ${username}, I have established one npm packages called "khmer date".`;
}

export { getMessage };