import Config from "../../Config";
import languages from "../../Config/languages";
import { TYPEROLE } from "./Constants";

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
    DataMission: [
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
    ],
    DataMissionHistory : [
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
}