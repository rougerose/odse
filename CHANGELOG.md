# Changelog

## 2.0.4 - 2024-04-06

### Fixed

- insertion de odse.js : le fichier est compressé avec les fichiers de spip et le "defer" n'est plus effectif. La principale conséquence est que le menu version mobile ne fonctionne plus. Le fichier est donc inséré depuis /header_js.

## 2.0.3 - 2024-02-09

### Added

- ajout du CHANGELOG.md

### Fixed

- Pagination : adapter les styles à la pagination de Spip 4 et améliorer l'accessibilité des liens de pagination :
  - en mode « page » : la zone de clic sur le bouton est plus grande ; la couleur est utilisée pour la page active uniquement ;
  - en mode « précédent-suivant » : le titre est affiché sur 50 signes ; ajout de l'attribut title sur le lien avec le titre complet ; ajout de la classe .switcher pour gérer plus facilement un affichage 1 ou 2 colonnes selon le terminal
