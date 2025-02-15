import {Global} from 'base-common';
class Languages {
  strings: any = {
    fr: {
      // Role
      'role.title.top': 'Citotrad',
      'role.good.morning': 'Bonjour !',
      'role.please.choose':
        'Pour commencer, veuillez choisir un type d’entité.',
      'role.institution': 'Institution',
      'role.interpreter': 'Interprète',

      // SignIn
      'signin.title.top': 'Connectez-vous à Citotrad',
      'signin.welcome': 'Bon retour parmi nous !',
      'signin.email': 'Adresse email',
      'signin.password': 'Mot de passe',
      'signin.remember': 'Se souvenir de moi?',
      'signin.forgot': 'Mot de passe oublié ?',
      'signin.or': 'ou',
      'signin.login': 'Connexion',
      'signin.register': 'Pas encore de compte? Inscrivez-vous',
      'signin.email.error': 'Email is not valid',
      'signin.password.error': 'Mauvais mot de passe',
      'signin.password.please': 'Veuillez entrer votre mot de passe',

      //Home
      'home.title.top': 'Bienvenue sur Citotrad',
      'home.verification':'Votre compte est en cours de vérification !',
      'home.verification.content': 'Nous sommes en train de vérifier votre profil. Nous vous tiendrons informé une fois terminé. Merci pour votre patience.',
      'home.description':'Trouvez un interprète immédiatement ou planifiez pour des missions futures.',
      'home.plan': 'Planifier pour plus tard',
      'home.find': 'Trouver un interprète',
      'home.mission':'Missions en cours et à venir',
      'home.history':'Missions précédentes'
    },
    vi: {},
    en: {},
  };

  get(key: string): string {
    let lang = Global.lang ? Global.lang : 'fr';
    if (this.strings[lang]) {
      let temp = this.strings[lang][key];
      if (temp == null || temp == '') {
        temp = key;
      }
      if (temp == null) {
        temp = '';
      }
      return temp.trim();
    } else {
      return key;
    }
  }
}

export default new Languages();
