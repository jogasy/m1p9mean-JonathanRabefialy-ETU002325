#Author
Rabefialy Jonathan M1P9 ETU002325

# mikaly forn-end (Angular)
1 - mode developpement (en mode dev)
- "npm run dev" pour demarrer l'application 
- pour aller dans la partie admin et livreur appuyer sur "Mikaly" dans la barre de navigation
- pour se loger en tant qu'admin , name = "admin" password = "admin"
- pour se loger en tant que livreur , name = "delivery" password = "delivery"

2 - mode production , accedez a l'application via l'url "https://mikaly-front-end.herokuapp.com"

3 - les outils utilisées sont : 
  - bootstrap
  - ngx-bootstrap
  - feather icons
  - ngxs (pour le state management au lieu de ngrx)

4 - Bonnes pratiques : on a divisé l'application en module (lazy loading) , on a utilisé des pipes et des directives mais aussi le state(ngxs) pour partager des données dans plusieurs modules

#back-end (nodejs + express)
1 - mode developpement (en mode dev)
- "npm run serve" pour lancer l'application 

2 - mode production , l'api est disponible sur "https://mikaly.herokuapp.com"

3 - les outils utilisées sont : 
  - express
  - nodemon 
  - concurrently
  - multer (pour l'upload des fichiers) 
  
 4 - Bonnes pratiques : on a divisé les parties: routes, controlleurs, model(schema), types de données(interfaces).

#Base de données 
- installer mongodb community server pour le locel 
- on a utiliser mongodbAtlas pour la base de données en ligne dans le cloud

############################################################################
Pour la mise en production , on a utilisé heroku (gratuit) pour la front-end et pour le back-end





