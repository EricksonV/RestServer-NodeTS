import { roleI } from "./roleInterface";

export interface userI extends roleI{
    name: string;
    email: string;
    password: string;
    image?: string;
    role: roleI;
    state: boolean;
    google: boolean
}


