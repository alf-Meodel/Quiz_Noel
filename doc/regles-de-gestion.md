 <a href="../README.md">
  <img src="../assets/button/home_page.png" alt="Home page" style="width: 150px; height: auto;">
</a>

![border](../assets/line/border_deco_rt.png)

# Règles de gestion 


![border](../assets/line/border_deco_rb.png)


#### **Gestion des utilisateurs**
- **RG1** : Un utilisateur possède un identifiant unique.
- **RG2** : Un utilisateur possède un pseudonyme.
- **RG3** : Un utilisateur possède un rôle qui peut être :
  - **Utilisateur standard** : Peut accéder aux quiz et jouer des parties.
  - **Administrateur** : Dispose de droits supplémentaires (création, modification, suppression des quiz, gestion des accès).
- **RG4** : Un utilisateur standard peut participer à une ou plusieurs parties.
- **RG5** : Un administrateur peut créer, modifier et supprimer des quiz, des questions et des clés d’accès.
- **RG6** : Un administrateur ne peut pas supprimer définitivement des données structurelles comme les tables ou la database 


#### **Gestion des quiz**
- **RG8** : Un quiz possède un identifiant unique.
- **RG9** : Un quiz possède un titre.
- **RG9** : Un quiz possède une description.
- **RG10** : Chaque quiz est associé à une combinaison clé/valeur composée d’un code et d’un mot de passe pour y accéder.
- **RG11** : Un quiz est composé de plusieurs questions.

- **RG13** : Un quiz peut être joué par plusieurs utilisateurs.

#### **Gestion des questions**
- **RG14** : Une question possède un identifiant unique.
- **RG15** : Une question est liée à un et un seul quiz.
- **RG16** : Une question possède une description,
- **RG16** : Une question possède une liste de réponses, 
- **RG16** : Une question possède une bonne réponse

#### **Gestion des parties**
- **RG17** : Une partie possède un identifiant unique.
- **RG18** : Une partie est liée à deux utilisateur et à un quiz.
- **RG19** : Une partie affiche le score total obtenu par l’utilisateur.
- **RG20** : Une partie enregistre la date et l’heure de début et de fin.
- **RG21** : Une partie est considérée comme terminée lorsque toutes les questions du quiz sont répondues.

#### **Gestion des scores**
- **RG22** : Un score est associé à une partie.
- **RG23** : Un score est calculé sur la base des bonnes réponses d’un utilisateur pour un quiz donné.
- **RG24** : Le score d’un utilisateur est sauvegardé.

#### **Gestion des accès**
- **RG25** : Chaque quiz est accessible via un code et un mot de passe uniques.
- **RG26** : Si le code ou le mot de passe est incorrect, l’accès au quiz est refusé.
- **RG27** : Les codes et mots de passe sont gérés par les administrateurs (utilisateurs avec le rôle "administrateur").

---


![border](../assets/line/line-pink-point_r.png)

<a href="#sommaire">  <img src="../assets/button/back_to_top.png" alt="Back to top" style="width: 150px; height: auto;"></a>

![border](../assets/line/border_deco_l.png)
