declare module "sample-rollup-npm" {
    export type TMetadata = {
        username: string;
        age: number;
        dob: string;
    }

    /**
     * 
     * @param username string
     */
    export function getMessage(username: string): string;

    /**
     * 
     * @param username string
     */
    export function getMetaData(username: string): TMetadata;
}