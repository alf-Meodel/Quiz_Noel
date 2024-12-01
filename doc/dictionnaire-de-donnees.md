 <a href="../README.md">
  <img src="../assets/button/home_page.png" alt="Home page" style="width: 150px; height: auto;">
</a>

![border](../assets/line/border_deco_rt.png)

# **Dictionnaire de données pour le Quiz**


![border](../assets/line/border_deco_rb.png)

| **Nom de la colonne**      | **Type**    | **Taille** | **Description**                                           |
|-----------------------------|-------------|------------|-----------------------------------------------------------|
| **uuid_utilisateurs**       | UUID        |            | Identifiant unique de l'utilisateur.                     |
| **pseudo_utilisateurs**     | VARCHAR     |            | Pseudonyme de l'utilisateur.                             |
| **role_utilisateurs**       | VARCHAR     |            | Rôle de l'utilisateur (`Administrateur` ou `Utilisateur`).|
| **id_quiz**                 | INTEGER     |            | Identifiant unique du quiz.                              |
| **titre_quiz**              | VARCHAR     |            | Titre du quiz.                                           |
| **description_quiz**        | TEXT        |            | Description du quiz.                                     |
| **code_acces_quiz**         | VARCHAR     |            | Code d'accès pour accéder au quiz.                      |
| **mot_de_passe_quiz**       | VARCHAR     |            | Mot de passe associé au quiz.                           |
| **id_questions**            | INTEGER     |            | Identifiant unique de la question.                      |
| **id_quiz_questions**       | INTEGER     |            | Identifiant du quiz auquel la question est associée.     |
| **texte_questions**         | TEXT        |            | Texte de la question.                                    |
| **options_questions**       | JSONB       |            | Liste des réponses possibles à la question.             |
| **bonne_reponse**           | INTEGER     |            | Index de la bonne réponse dans la liste d'options.      |
| **id_parties**              | UUID        |            | Identifiant unique de la partie.                        |
| **id_utilisateur1**         | UUID        |            | Identifiant du premier utilisateur dans la partie.       |
| **id_utilisateur2**         | UUID        | NULLABLE   | Identifiant du second utilisateur dans la partie.        |
| **id_quiz_parties**         | INTEGER     |            | Identifiant du quiz joué dans cette partie.              |
| **score_total**             | INTEGER     |            | Score total obtenu pendant la partie.                    |
| **heure_debut_partie**      | TIMESTAMP   |            | Heure de début de la partie.                             |
| **heure_fin_partie**        | TIMESTAMP   |            | Heure de fin de la partie.                               |
| **id_scores**               | UUID        |            | Identifiant unique du score.                             |
| **id_utilisateur_scores**   | UUID        |            | Identifiant de l'utilisateur associé au score.           |
| **id_parties_scores**       | UUID        |            | Identifiant de la partie à laquelle le score est lié.    |
| **points_scores**           | INTEGER     |            | Nombre de points obtenus par l'utilisateur dans la partie.|


![border](../assets/line/line-pink-point_r.png)

<a href="#sommaire">  <img src="../assets/button/back_to_top.png" alt="Back to top" style="width: 150px; height: auto;"></a>

![border](../assets/line/border_deco_l.png)
