/*
 * This file is should mirror the persona.json.
 * Any attributes that phantom is missing will be copied from real in the persona store.
 */
export type Person = {
    name: string,
    title: string,
    location: string,
    workplace: string,
    birthplace: string,
    birthdate: string,
    email: string,
    github: string,
    twitter: string,
    website: string,
}

export type Persona = {
    real: Person,
    phantom: Person,
}
