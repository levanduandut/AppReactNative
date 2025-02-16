import Config from "../../Config";
import languages from "../../Config/languages";
import { Interpreter, Mission } from "./TypeData";
import { TYPEROLE } from "./Constants";


export const interpreter: Interpreter = {
    id: 123,
    name: "Ananya Sharma",
    phoneNumber: "+33 6 12 34 56 78",
    language: ["Français", "Hindi"],
    vote: 4.5,
    location: "750001 Paris",
    birth: "15 août 1994",
    place_birth: "Lyon, France",
    suppor_doc: [
        { name: "Document d'identité", verify: true },
        { name: "Vérification du casier judiciaire", verify: false },
        { name: "Kbis", verify: false },
        { name: "Attestation URSSAF", verify: true },
        { name: "RC PRO", verify: true },
    ],
    exp: [
        { title: "Police Nationale", description: "Interprétariat lors d'enquêtes et gardes à vue." },
        { title: "Tribunaux", description: "Interprétariat simultanée lors de procès et audiences." },
        { title: "Administrations publiques", description: "Assistance linguistique pour des démarches administratives." },
    ],
};

export const DataMission : Mission[] = [
    {
        name: 'Allemand',
        language: 'Français',
        status: 1,
        time: '10 juillet à 8h30',
        addreess: "75001 Paris",
        icon: Config.Icon.Home.ic_avatar_default
    },
    {
        name: 'Anglais',
        language: 'Français',
        status: 2,
        time: '11 juillet à 8h30',
        addreess: "75001 Paris",
        icon: Config.Icon.Home.ic_avatar_default
    },
    {
        name: 'Arabe',
        language: 'Français',
        status: 2,
        time: '11 juillet à 8h30',
        addreess: "75001 Paris",
        icon: Config.Icon.Home.ic_avatar_default
    },
]

export const DataMissionInter : Mission[] = [
    {
        name: 'Allemand',
        language: 'Français',
        status: 1,
        time: '10 juillet à 8h30',
        addreess: "75001 Paris",
        icon: Config.Icon.Home.ic_company_default
    },
    {
        name: 'Anglais',
        language: 'Français',
        status: 2,
        time: '11 juillet à 8h30',
        addreess: "75001 Paris",
        icon: Config.Icon.Home.ic_company_default
    },
    {
        name: 'Arabe',
        language: 'Français',
        status: 2,
        time: '11 juillet à 8h30',
        addreess: "75001 Paris",
        icon: Config.Icon.Home.ic_company_default
    },
]

export const DataMissionHistory: Mission[] = [
    {
        name: 'Allemand',
        language: 'Français',
        status: 3,
        time: '10 juillet à 8h30',
        addreess: "75001 Paris",
        icon: Config.Icon.Home.ic_avatar_default
    },
    {
        name: 'Anglais',
        language: 'Français',
        status: 3,
        time: '11 juillet à 8h30',
        addreess: "75001 Paris",
        icon: Config.Icon.Home.ic_avatar_default
    },
]

export const DataMissionHistoryInter: Mission[] =[
    {
        name: 'Allemand',
        language: 'Français',
        status: 3,
        time: '10 juillet à 8h30',
        addreess: "75001 Paris",
        icon: Config.Icon.Home.ic_company_default
    },
    {
        name: 'Anglais',
        language: 'Français',
        status: 3,
        time: '11 juillet à 8h30',
        addreess: "75001 Paris",
        icon: Config.Icon.Home.ic_company_default
    },
]

export default {
    RoleScreen: [
        {
            text: languages.get('role.institution'),
            icon: Config.Icon.Role.role_institution,
            type: TYPEROLE.INSTITUTION
        },
        {
            text: languages.get('role.interpreter'),
            icon: Config.Icon.Role.role_interpreter,
            type: TYPEROLE.INTERPRETER
        }
    ],
}