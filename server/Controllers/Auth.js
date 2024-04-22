const User = require("../Models/UserSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// function to generate a token
const createToken = (id, email, role) => {
    return jwt.sign(
        { data: { id, email, role } },
        process.env.JWT_KEY,
        { expiresIn: "1d" }
    )
}

// register or SignUp
module.exports.signUP = async (req, res) => {
    try {
        const { nom, email,tel, mdp, numPassport , age , role } = req.body;

        // Before creating a new user, we verify if this user already exists or not!!!

        const userEmailExist = await User.findOne({ email });
        if (userEmailExist) {
            return res.status(409).json({ message: "User with this email is already Exist!" });
        }
        // crypt password
        const salt = await bcrypt.genSalt(10);
        const cryptPassword = await bcrypt.hash(mdp, salt);

        // A new user created!!!
        const user = await User.create({
            nom,
            email,
            tel,
            mdp: cryptPassword,
            numPassport,
            age,
            role : 0  //0 is the default value for the user , and 1 is the value for admins
        });

        return res.status(201).json({ message: " successfully creation User  ...", user });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error "+console.log(error), error});
    }
}

// Connection or signIn
module.exports.signIn = async (req, res) => {
    try {
        const { email, mdp } = req.body;
        const user = await User.findOne({ email: email });
        // we verify if this  user exist if everything is ok we continued with the function next() !!!
        if (!user) {
            return res.status(401).json({ message: `the user with this email : ${email} does'nt exist... ` })
        }
        const comparePassword = bcrypt.compareSync(mdp, user.mdp);
        if (!comparePassword) {
            return res.status(401).json({ message: "Incorrect Password" })
        }
        const token = createToken(user._id, user.email, user.role)
        res.status(200).json({ message: "Successfully connection", token, user });
        
    } catch (error) {
        console.log(error);

        res.status(500).send({ message: "Internal Server Error" +console.log(error) , error});
    }
}



// Commentaires
// Ce code contient deux fonctions, `signUP` et `signIn`, qui permettent de gérer les opérations d'inscription
// et de connexion d'un utilisateur dans une application utilisant Node.js et MongoDB (via le modèle `User`). 
//Je vais commenter chaque partie de ce code :

// ### Fonctions Utilitaires :

// 1. **`createToken`:**
//     - Cette fonction crée un jeton JWT pour un utilisateur donné.
//     - Elle prend en entrée un `id`, un `email` et un `role` de l'utilisateur.
//     - Elle utilise `jwt.sign()` pour créer un jeton JWT contenant un objet avec les données de l'utilisateur 
//(`id`, `email`, `role`).
//     - La clé secrète (`process.env.JWT_KEY`) utilisée pour signer le jeton est récupérée depuis les variables
// d'environnement.
//     - Le jeton est configuré pour expirer après 1 jour (`expiresIn: "1d"`).
//     - La fonction renvoie le jeton JWT créé.

// ### Fonctions de Route :

// 2. **`signUP`:**
//     - Cette fonction gère l'inscription d'un nouvel utilisateur.
//     - Elle commence par récupérer les données de l'utilisateur (prénom, nom, numéro de téléphone, email,
//      mot de passe, rôle) depuis `req.body`.
//     - Elle vérifie si un utilisateur avec cet email existe déjà dans la base de données en utilisant `
        //User.findOne`.
//     - Si l'email existe déjà, elle renvoie une réponse avec un statut HTTP 409 (conflit) et un message d'erreur.
//     - Si l'email n'existe pas, elle crypte le mot de passe de l'utilisateur avec `bcrypt.hash` et un `salt` généré.
//     - Ensuite, elle crée un nouvel utilisateur dans la base de données avec les données fournies, en utilisant `User.create`.
//     - Après la création de l'utilisateur, elle renvoie une réponse avec un statut HTTP 201 (créé) et un message de réussite.
//     - Si une erreur survient, elle renvoie une réponse avec un statut HTTP 500 (erreur serveur interne) et l'erreur rencontrée.

// 3. **`signIn`:**
//     - Cette fonction gère la connexion d'un utilisateur existant.
//     - Elle commence par récupérer les données de connexion de l'utilisateur (email et mot de passe) depuis `req.body`.
//     - Elle cherche l'utilisateur dans la base de données en utilisant `User.findOne` et l'email fourni.
//     - Si l'utilisateur n'est pas trouvé, elle renvoie une réponse avec un statut HTTP 401 (non autorisé) et un message d'erreur.
//     - Si l'utilisateur est trouvé, elle compare le mot de passe fourni avec le mot de passe haché stocké dans la base de données en utilisant `bcrypt.compareSync`.
//     - Si les mots de passe ne correspondent pas, elle renvoie une réponse avec un statut HTTP 401 (non autorisé) et un message d'erreur.
//     - Si les mots de passe correspondent, elle crée un jeton JWT pour l'utilisateur en utilisant `createToken`.
//     - Elle renvoie une réponse avec un statut HTTP 200 (réussite), un message de réussite, le jeton JWT et les données de l'utilisateur.
//     - Si une erreur survient, elle renvoie une réponse avec un statut HTTP 500 (erreur serveur interne) et l'erreur rencontrée.