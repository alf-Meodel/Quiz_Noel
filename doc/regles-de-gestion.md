 <a href="../README.md">
  <img src="../assets/button/home_page.png" alt="Home page" style="width: 150px; height: auto;">
</a>

![border](../assets/line/border_deco_rt.png)

# Règles de gestion 

![border](../assets/line/line-pink-point_l.png)

## Sommaire

- [Introduction](#introduction)

![border](../assets/line/border_deco_rb.png)

## Gestion des utilisateurs
- **RG1 :** Un utilisateur possède un identifiant unique.
- **RG2 :** Un utilisateur possède un pseudonyme.
- **RG3 :** Un utilisateur peut participer à une ou plusieurs parties.
- **RG4 :** Un utilisateur non identifié peut accéder à un quiz mais ses résultats ne sont pas sauvegardés.
## Gestion des administrateurs
- **RG5 :** Un administrateur possède un identifiant unique.
- **RG6 :** Un administrateur possède un pseudonyme et un mot de passe.
- **RG7 :** Un administrateur peut créer, modifier, et supprimer des quiz, des questions et des clés d'accès.
- **RG8 :** Un administrateur ne peut pas supprimer définitivement des données critiques, comme les résultats des parties ou les utilisateurs.
## Gestion des quiz
- **RG9 :** Un quiz possède un identifiant unique.
- **RG10 :** Un quiz possède un titre et une description.
- **RG11 :** Chaque quiz est associé à une combinaison clé/valeur composée d’un code et d’un mot de passe pour y accéder.
- **RG12 :** Un quiz est composé de plusieurs questions.
- **RG13 :** Chaque question d’un quiz possède un texte, un ensemble d’options et une réponse correcte.
- **RG14 :** Un quiz peut être joué par plusieurs utilisateurs.
## Gestion des questions
- **RG15 :** Une question possède un identifiant unique.
- **RG16 :** Une question est liée à un et un seul quiz.
- **RG17 :** Une question possède un texte, une liste d'options, et un index indiquant la bonne réponse.
## Gestion des parties
- **RG18 :** Une partie possède un identifiant unique.
- **RG19 :** Une partie est liée à un utilisateur identifié et à un quiz.
- **RG20 :** Une partie sauvegarde le score total obtenu par l’utilisateur.
- **RG21 :** Une partie enregistre la date et l’heure de début et de fin.
- **RG22 :** Une partie est considérée comme terminée lorsque toutes les questions du quiz sont répondues.
## Gestion des scores
- **RG23 :** Un score est associé à une partie.
- **RG24 :** Un score est calculé sur la base des bonnes réponses d’un utilisateur pour un quiz donné.
- **RG25 :** Le score d’un utilisateur est sauvegardé uniquement s’il est identifié.
## Gestion des accès
- **RG26 :** Chaque quiz est accessible via un code et un mot de passe uniques.
- **RG27 :** Si le code ou le mot de passe est incorrect, l’accès au quiz est refusé.
- **RG28 :** Les codes et mots de passe sont gérés par les administrateurs.

![border](../assets/line/line-pink-point_r.png)

<a href="#sommaire">  <img src="../assets/button/back_to_top.png" alt="Back to top" style="width: 150px; height: auto;"></a>

![border](../assets/line/border_deco_l.png)
