

function Raz() {
  //var i = 1,k = 1;
  for (let i = 1; i <= Nb_Canal; i++) { Canal[i].Etat = Zero }
  for (let i = 1; i <= Nb_Distributeur; i++) { for (let k = -1; k <= 5; k++) { Distributeur[i].Etat_Ext[k] = 0 } }
  for (let i = 1; i <= Nb_Memoire; i++) { for (let k = 1; k <= 4; k++) { Memoire[i].Etat_Ext[k] = 0 } }
  for (let i = 1; i <= Nb_Sequenceur; i++) { for (let k = 1; k <= 22; k++) { Sequenceur[i].Etat_Ext[k] = 0 } }
  for (let i = 1; i <= Nb_Canal_Pilote; i++) { Canal_Pilote[i].Etat = Bof }
  for (let i = 1; i <= Nb_Capteur; i++) { for (let k = 1; k <= 3; k++) { Capteur[i].Etat_Ext[k] = Bof } }
  for (let i = 1; i <= Nb_Verin; i++) { for (let k = 1; k <= 2; k++) { Verin[i].Etat_Ext[k] = 0 } }
  for (let i = 1; i <= Nb_Carrefour; i++) { Carrefour[i].Etat = Zero }
  for (let i = 1; i <= Nb_Carrefour_Pilote; i++) { Carrefour_Pilote[i].Etat = Bof }
  for (let i = 1; i <= Nb_Valve; i++) { for (let k = 1; k <= 2; k++) { Valve[i].Etat_Ext[k] = 0 } }   //Проверить
  for (let i = 1; i <= Nb_Manometr; i++) { Manometr[i].Etat = Zero }
}

//Старый обнуление
function Raz_Vieux() {
  Vieux_Nb_Verin = 0;
  Vieux_Nb_Distributeur = 0;
  Vieux_Nb_Capteur = 0;
  Vieux_Nb_Alim = 0;
  Vieux_Nb_Alim_Pilote = 0;
  Vieux_Nb_Carrefour_Pilote = 0;
  Vieux_Nb_Carrefour = 0;
  Vieux_Nb_Commande = 0;
  Vieux_Nb_Canal_Pilote = 0;
  Vieux_Nb_Canal = 0;
  Vieux_Nb_Memoire = 0;
  Vieux_Nb_Sequenceur = 0;
  Vieux_Nb_Valve = 0;
  Vieux_Nb_Manometr = 0;
}

//Большое обнуление
function Super_Raz() {
  //var Pour = 1, K = 1;
  Raz_Vieux();
  Raz();

  for (let Pour = 1; Pour <= Nb_Canal; Pour++) {  //for (let Pour = 1; Pour <= Max_Canal; Pour++) {
    for (let K = 1; K <= 2; K++) {
      Canal[Pour].Etat = Zero;
      Canal[Pour].Bout[K].Quoi = 'Rien';
    }
  }

  for (let Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) {  //for (let Pour = 1; Pour <= Max_Canal_Pilote; Pour++) {
    for (let K = 1; K <= 2; K++) {
      Canal_Pilote[Pour].Etat = Bof;
      Canal_Pilote[Pour].Bout[K].Quoi = 'Rien';
    }
  }

  for (let Pour = 1; Pour <= Nb_Distributeur; Pour++) { for (let K = -1; K <= 5; K++) { Distributeur[Pour].Etat_Ext[K] = 0 } }  //for (let Pour = 1; Pour <= Max_Distributeur; Pour++) { for (let K = -1; K <= 5; K++) { Distributeur[Pour].Etat_Ext[K] = 0 } }
  for (let Pour = 1; Pour <= Nb_Capteur; Pour++) { Capteur[Pour].Etat = 0 }  //for (let Pour = 1; Pour <= Max_Capteur; Pour++) { Capteur[Pour].Etat = 0 } 


  Nb_Verin = 0;
  Nb_Distributeur = 0;
  Nb_Commande = 0;
  Nb_Canal = 0;
  Nb_Canal_Pilote = 0;
  Nb_Alimentation = 0;
  Nb_Capteur = 0;
  Nb_Alim_Pilote = 0;
  Nb_Carrefour = 0;
  Nb_Carrefour_Pilote = 0;
  Nb_Memoire = 0;
  Nb_Sequenceur = 0;
  Nb_Valve = 0;
  Nb_Manometr = 0;
  Nb_Texte = 0;

}

//Отображение времени
/*function Affiche_Temps(X, Y, Go) { //X,Y - координаты
  var dim = 18;
  var h = 0, m = 0;
  // var heure = 0;

  //heure = frac(time) * 24;
  h = hours; //h = round(int(heure));
  m = minutes; //m = round((frac(heure) * 60));
  if (h >= 12) (h = h - 12);
  if ((h != Heur) || (m != Minute) || Go) {
    Couleur('#008000');
    Ligne(X, Y, X + 2 * dim / 3 * Math.cos(-(Heur * 60 + Minute) * Math.PI / 360 + Math.PI / 2), Y - 2 * dim / 3 * Math.sin(-(Heur * 60 + Minute) * Math.PI / 360 + Math.PI / 2));
    Ligne(X, Y, X + dim * Math.cos(-Minute * Math.PI / 30 + Math.PI / 2), Y - dim * Math.sin(-Minute * Math.PI / 30 + Math.PI / 2));
    Heur = h;
    Minute = m;
    Couleur('#008000');
    Ligne(X, Y, X + 2 * dim / 3 * Math.cos(-(Heur * 60 + Minute) * Math.PI / 360 + Math.PI / 2), Y - 2 * dim / 3 * Math.sin(-(Heur * 60 + Minute) * Math.PI / 360 + Math.PI / 2));
    Ligne(X, Y, X + dim * Math.cos(-Minute * Math.PI / 30 + Math.PI / 2), Y - dim * Math.sin(-Minute * Math.PI / 30 + Math.PI / 2));
    Cercle(X, Y, dim + 2);
    NPave(X, Y, '#008000');
  }
}*/



//*************Рисование элементов пневматики*************

//Отображение пружины горизонтальной
function Affiche_Ressort(X, Y, XFin, Hauteur, Droite) {
  intervalle = (XFin - X) / 3;
  if (Droite) {
    Signe = 1;
  } else {
    Signe = -1;
  }

  for (var Pour = 0; Pour < 3; Pour++) {
    Ligne(X + Signe * Pour * intervalle, Y - Hauteur / 2, X + Signe * (Pour + 0.5) * intervalle, Y + Hauteur / 2);
    Ligne(X + Signe * (Pour + 0.5) * intervalle, Y + Hauteur / 2, X + Signe * (Pour + 1) * intervalle, Y - Hauteur / 2);
  }
}

//Отображение пружины вертикальной
function Affiche_Ressort_Vertical(X, Y, YFin, Largeur, Bas) {
  intervalle = (YFin - Y) / 3;
  if (Bas) {
    Signe = 1;
  } else {
    Signe = -1;
  }

  for (let Pour = 0; Pour < 3; Pour++) {
    Ligne(X - Largeur / 2, Y + Signe * Pour * intervalle, X + Largeur / 2, Y + Signe * (Pour + 0.5) * intervalle);
    Ligne(X + Largeur / 2, Y + Signe * (Pour + 0.5) * intervalle, X - Largeur / 2, Y + Signe * (Pour + 1) * intervalle);
  }
}

//Создать секвенсер
function Cree_Sequenceur(XE, YE, Combien_Etape) { //XE,YE - координаты, Combien_Etape - 
  //var Pour = 0;

  Nb_Sequenceur++;
  NewSequenceur(Nb_Sequenceur);
  Sequenceur[Nb_Sequenceur].X = XE;
  Sequenceur[Nb_Sequenceur].Y = YE;
  Sequenceur[Nb_Sequenceur].Combien = Combien_Etape;

  for (let Pour = 1; Pour <= 8; Pour++) {
    Sequenceur[Nb_Sequenceur].ExtX[Pour] = Sequenceur[Nb_Sequenceur].X + (Pour - 1 / 4) * SLargeur;
    Sequenceur[Nb_Sequenceur].ExtX[Pour + 8] = Sequenceur[Nb_Sequenceur].ExtX[Pour];
    Sequenceur[Nb_Sequenceur].ExtY[Pour] = Sequenceur[Nb_Sequenceur].Y + 5 / 4 * SLargeur - SLargeur / 2;
    Sequenceur[Nb_Sequenceur].ExtY[Pour + 8] = Sequenceur[Nb_Sequenceur].Y - 1 / 4 * SLargeur - SLargeur / 2;
  }
  for (let Pour = 17; Pour <= 20; Pour++) {
    Sequenceur[Nb_Sequenceur].ExtX[Pour] = Sequenceur[Nb_Sequenceur].X - 1 / 4 * SLargeur;
    Sequenceur[Nb_Sequenceur].ExtY[Pour] = Sequenceur[Nb_Sequenceur].Y + (Pour - 16) * SLargeur / 5 - SLargeur / 2;
  }

  Sequenceur[Nb_Sequenceur].ExtX[21] = Sequenceur[Nb_Sequenceur].X + (Sequenceur[Nb_Sequenceur].Combien + 3 / 4) * SLargeur;
  Sequenceur[Nb_Sequenceur].ExtX[22] = Sequenceur[Nb_Sequenceur].ExtX[21];
  Sequenceur[Nb_Sequenceur].ExtY[21] = Sequenceur[Nb_Sequenceur].ExtY[17];
  Sequenceur[Nb_Sequenceur].ExtY[22] = Sequenceur[Nb_Sequenceur].ExtY[20];
  Sequenceur[Nb_Sequenceur].Etat = 0;
}

//Отображение состояния секвенсера
function Affiche_Etat_Sequenceur(Numero) { //Numero - номер
  //var Pour = 0;

  for (let Pour = 1; Pour <= Sequenceur[Numero].Combien; Pour++) {
    if (Pour == Sequenceur[Numero].Etat) {
      NPave(Sequenceur[Numero].X + (Pour - 1) * SLargeur + SLargeur / 2, Sequenceur[Numero].Y - SLargeur / 4, '#000000')
    }
    else {
      NPave(Sequenceur[Numero].X + (Pour - 1) * SLargeur + SLargeur / 2, Sequenceur[Numero].Y - SLargeur / 4, '#FFFFFF')
    }
  }
}

//Отображение секвенсера
function Affiche_Sequenceur(Numero, Blanc) { //Numero - номер, Blanc - отображать или нет
  //var Pour = 0;
  var XX = 0;
  var YY = 0;

  //if SVG then form1.memo1.lines.Add('<g>');

  Couleur('#000000');
  Rect(Sequenceur[Numero].X, Sequenceur[Numero].Y - SLargeur / 2, Sequenceur[Numero].X + SLargeur / 4, Sequenceur[Numero].Y + SLargeur / 2);
  Rect(Sequenceur[Numero].X + Sequenceur[Numero].Combien * SLargeur + SLargeur / 4, Sequenceur[Numero].Y - SLargeur / 2, Sequenceur[Numero].X + SLargeur / 2 + Sequenceur[Numero].Combien * SLargeur, Sequenceur[Numero].Y + SLargeur / 2);

  for (let Pour = 1; Pour <= Sequenceur[Numero].Combien; Pour++) {
    Rect(Sequenceur[Numero].X + SLargeur / 4 + (Pour - 1) * SLargeur, Sequenceur[Numero].Y - SLargeur / 2, Sequenceur[Numero].X + SLargeur / 4 + Pour * SLargeur, Sequenceur[Numero].Y + SLargeur / 2);
    XX = Sequenceur[Numero].X + 3 * SLargeur / 4 + (Pour - 1) * SLargeur;
    Ligne(XX, Sequenceur[Numero].Y + SLargeur / 2, XX, Sequenceur[Numero].Y + SLargeur / 2 + SLargeur / 4);
    Ligne(XX, Sequenceur[Numero].Y - SLargeur / 2, XX, Sequenceur[Numero].Y - SLargeur / 2 - SLargeur / 4);
    Pointille(Sequenceur[Numero].X + SLargeur / 4 + (Pour - 1) * SLargeur, Sequenceur[Numero].Y + SLargeur / 2, Sequenceur[Numero].X + SLargeur / 4 + Pour * SLargeur, Sequenceur[Numero].Y - SLargeur / 2);
  }

  for (let Pour = 1; Pour <= 4; Pour++) {
    YY = Pour * SLargeur / 5 - SLargeur / 2;
    Ligne(Sequenceur[Numero].X, Sequenceur[Numero].Y + YY, Sequenceur[Numero].X - SLargeur / 4, Sequenceur[Numero].Y + YY);
  }

  XX = SLargeur / 2 + SLargeur * Sequenceur[Numero].Combien;
  Ligne(Sequenceur[Numero].X + XX, Sequenceur[Numero].Y + SLargeur / 5 - SLargeur / 2, Sequenceur[Numero].X + XX + SLargeur / 4, Sequenceur[Numero].Y + SLargeur / 5 - SLargeur / 2);
  Ligne(Sequenceur[Numero].X + XX, Sequenceur[Numero].Y + 4 * SLargeur / 5 - SLargeur / 2, Sequenceur[Numero].X + XX + SLargeur / 4, Sequenceur[Numero].Y + 4 * SLargeur / 5 - SLargeur / 2);

  Affiche_Etat_Sequenceur(Numero);
  Couleur('#000000');
  //if SVG then form1.memo1.lines.Add('</g>');
}



//Создать гидроцилиндр
function Cree_Verin(XX, YY, Model) { //XX - координата  X, YY - координата Y, Model - тип гидроцилиндра
  Nb_Verin++;
  NewVerin(Nb_Verin);
  Verin[Nb_Verin].X = XX;
  Verin[Nb_Verin].Y = YY;
  if (Model != 'Double_V') {
    Verin[Nb_Verin].EntreeX[1] = XX + L_Bout / 2;
    Verin[Nb_Verin].EntreeY[1] = YY + VHauteur / 2 + VCanal;
    Verin[Nb_Verin].EntreeX[2] = XX - L_Bout / 2 + VLargeur;
    Verin[Nb_Verin].EntreeY[2] = YY + VHauteur / 2 + VCanal;
  } else {
    Verin[Nb_Verin].EntreeX[1] = XX + VHauteur / 2 + VCanal;
    Verin[Nb_Verin].EntreeY[1] = YY - L_Bout / 2;
    Verin[Nb_Verin].EntreeX[2] = XX + VHauteur / 2 + VCanal;
    Verin[Nb_Verin].EntreeY[2] = YY + L_Bout / 2 - VLargeur;
  }
  Verin[Nb_Verin].Tige = 2;
  Verin[Nb_Verin].Modele = Model;
}

//Отображение гидроцилиндра
function Affiche_Verin(Numero, C, Blanc) {  //Numero - номер гидроцилиндра, C - цвет, Blanc - отображать или нет
  var Coul = '';

  //Отображение гидроцилиндра
  function Affiche_Simple(Amortissement) {
    var Amor = 0;

    if (Amortissement) { Amor = VAmor } else { Amor = 0 }

    //With Verin[Numero] Do

    //if !SVG then

    if (Verin[Numero].Modele != 'Double_V') {
      ctx.setLineDash([5, 3]);
      Rect(Verin[Numero].X + (Maxtige - 1) * L_Bout + VL_Tige + L_Bout, Verin[Numero].Y - VH_Bout, Verin[Numero].X + (Maxtige - 1) * L_Bout + VL_Tige + 2 * L_Bout, Verin[Numero].Y + VH_Bout);
      Rect(Verin[Numero].X + (Mintige - 1) * L_Bout + VL_Tige + L_Bout, Verin[Numero].Y - VH_Bout, Verin[Numero].X + (Mintige - 1) * L_Bout + VL_Tige + 2 * L_Bout, Verin[Numero].Y + VH_Bout);
      ctx.setLineDash([]);
      Ligne(Verin[Numero].X, Verin[Numero].Y + VHauteur / 2, Verin[Numero].X + VLargeur, Verin[Numero].Y + VHauteur / 2);
      Ligne(Verin[Numero].X, Verin[Numero].Y - VHauteur / 2, Verin[Numero].X + VLargeur, Verin[Numero].Y - VHauteur / 2);
    } else {
      ctx.setLineDash([5, 3]);
      Rect(Verin[Numero].X - VH_Bout, Verin[Numero].Y - (Maxtige - 1) * L_Bout - VL_Tige - L_Bout, Verin[Numero].X + VH_Bout, Verin[Numero].Y - (Maxtige - 1) * L_Bout - VL_Tige - 2 * L_Bout);
      Rect(Verin[Numero].X - VH_Bout, Verin[Numero].Y - (Mintige - 1) * L_Bout - VL_Tige - L_Bout, Verin[Numero].X + VH_Bout, Verin[Numero].Y - (Mintige - 1) * L_Bout - VL_Tige - 2 * L_Bout);
      ctx.setLineDash([]);
      Ligne(Verin[Numero].X + VHauteur / 2, Verin[Numero].Y, Verin[Numero].X + VHauteur / 2, Verin[Numero].Y - VLargeur);
      Ligne(Verin[Numero].X - VHauteur / 2, Verin[Numero].Y, Verin[Numero].X - VHauteur / 2, Verin[Numero].Y - VLargeur);
    }

    if (Verin[Numero].Modele != 'Double_V') {
      Ligne(Verin[Numero].X + VLargeur, Verin[Numero].Y - VHauteur / 2, Verin[Numero].X + VLargeur, Verin[Numero].Y - VH_Tige);
      Ligne(Verin[Numero].X + VLargeur, Verin[Numero].Y + VHauteur / 2, Verin[Numero].X + VLargeur, Verin[Numero].Y + VH_Tige);
      Rect(Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout, Verin[Numero].Y - VHauteur / 2, Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout + L_Bout, Verin[Numero].Y + VHauteur / 2);
      Rect(Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout, Verin[Numero].Y - Amor, Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout - Amor / 5, Verin[Numero].Y + Amor);
      Rect(Verin[Numero].X + Verin[Numero].Tige * L_Bout, Verin[Numero].Y - Amor, Verin[Numero].X + Verin[Numero].Tige * L_Bout + Amor / 5, Verin[Numero].Y + Amor);
      Rect(Verin[Numero].X + Verin[Numero].Tige * L_Bout + Amor / 5, Verin[Numero].Y - VH_Tige, Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout + VL_Tige + L_Bout, Verin[Numero].Y + VH_Tige);
      Rect(Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout + VL_Tige + L_Bout, Verin[Numero].Y - VH_Bout, Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout + VL_Tige + 2 * L_Bout, Verin[Numero].Y + VH_Bout);
      Ligne(Verin[Numero].X + L_Bout / 2, Verin[Numero].Y + VHauteur / 2, Verin[Numero].X + L_Bout / 2, Verin[Numero].Y + VHauteur / 2 + VCanal);
      Ligne(Verin[Numero].X + VLargeur - L_Bout / 2, Verin[Numero].Y + VHauteur / 2, Verin[Numero].X - L_Bout / 2 + VLargeur, Verin[Numero].Y + VHauteur / 2 + VCanal);
    } else {
      Ligne(Verin[Numero].X - VHauteur / 2, Verin[Numero].Y - VLargeur, Verin[Numero].X - VH_Tige, Verin[Numero].Y - VLargeur);
      Ligne(Verin[Numero].X + VHauteur / 2, Verin[Numero].Y - VLargeur, Verin[Numero].X + VH_Tige, Verin[Numero].Y - VLargeur);
      Rect(Verin[Numero].X - VHauteur / 2, Verin[Numero].Y - (Verin[Numero].Tige - 1) * L_Bout, Verin[Numero].X + VHauteur / 2, Verin[Numero].Y - (Verin[Numero].Tige - 1) * L_Bout - L_Bout);
      Rect(Verin[Numero].X - VH_Tige, Verin[Numero].Y - Verin[Numero].Tige * L_Bout - Amor / 5, Verin[Numero].X + VH_Tige, Verin[Numero].Y - (Verin[Numero].Tige - 1) * L_Bout - VL_Tige - L_Bout);
      Rect(Verin[Numero].X - VH_Bout, Verin[Numero].Y - (Verin[Numero].Tige - 1) * L_Bout - VL_Tige - L_Bout, Verin[Numero].X + VH_Bout, Verin[Numero].Y - (Verin[Numero].Tige - 1) * L_Bout - VL_Tige - 2 * L_Bout);
      Ligne(Verin[Numero].X + VHauteur / 2, Verin[Numero].Y - L_Bout / 2, Verin[Numero].X + VHauteur / 2 + VCanal, Verin[Numero].Y - L_Bout / 2);
      Ligne(Verin[Numero].X + VHauteur / 2, Verin[Numero].Y - VLargeur + L_Bout / 2, Verin[Numero].X + VHauteur / 2 + VCanal, Verin[Numero].Y + L_Bout / 2 - VLargeur);
    }

  }

  //  if SVG then form1.memo1.lines.Add('<g>');
  if (!Blanc) { Couleur(C) } else { Couleur('#000000') } //Черный




  switch (Verin[Numero].Modele) {
    case 'Simple':
    case 'Double2':
    case 'Double_A':
      Ligne(Verin[Numero].X, Verin[Numero].Y - VHauteur / 2, Verin[Numero].X, Verin[Numero].Y + VHauteur / 2);
      Affiche_Simple(Verin[Numero].Modele == 'Double_A');
      if (Verin[Numero].Modele == 'Simple') {
        Triangle(Verin[Numero].X - L_Bout / 2 + VLargeur, Verin[Numero].Y + VHauteur / 2 + VCanal);
      }
      break;

    case 'Simple_R':
      Ligne(Verin[Numero].X, Verin[Numero].Y - VHauteur / 2, Verin[Numero].X, Verin[Numero].Y + VHauteur / 2);
      Affiche_Simple(false);
      Affiche_Ressort(Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout + L_Bout, Verin[Numero].Y, Verin[Numero].X + VLargeur, VHauteur / 1.5, A_Droite);
      Triangle(Verin[Numero].X - L_Bout / 2 + VLargeur, Verin[Numero].Y + VHauteur / 2 + VCanal);
      break;

    case 'R_Simple':
      Ligne(Verin[Numero].X, Verin[Numero].Y - VHauteur / 2, Verin[Numero].X, Verin[Numero].Y + VHauteur / 2);
      Verin[Numero].Tige = 11 - Verin[Numero].Tige;
      Affiche_Simple(false);
      Affiche_Ressort(Verin[Numero].X, Verin[Numero].Y, Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout, VHauteur / 1.5, A_Droite);
      Verin[Numero].Tige = 11 - Verin[Numero].Tige;
      Triangle(Verin[Numero].X + L_Bout / 2, Verin[Numero].Y + VHauteur / 2 + VCanal);
      break;

    case 'Double_T':
    case 'Double_T_A':
      Ligne(Verin[Numero].X, Verin[Numero].Y - VHauteur / 2, Verin[Numero].X, Verin[Numero].Y - VH_Tige);
      Ligne(Verin[Numero].X, Verin[Numero].Y + VHauteur / 2, Verin[Numero].X, Verin[Numero].Y + VH_Tige);
      Affiche_Simple(Verin[Numero].Modele == 'Double_T_A');
      if (Verin[Numero].Modele == 'Double_T_A') {
        Rect(Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout - VL_Tige, Verin[Numero].Y - VH_Tige, Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout - VAmor / 5, Verin[Numero].Y + VH_Tige);
      } else {
        Rect(Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout - VL_Tige, Verin[Numero].Y - VH_Tige, Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout, Verin[Numero].Y + VH_Tige);
        Rect(Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout - L_Bout - VL_Tige, Verin[Numero].Y - VH_Bout, Verin[Numero].X + (Verin[Numero].Tige - 1) * L_Bout - VL_Tige, Verin[Numero].Y + VH_Bout);
      }
      break;

    case 'Double_V':
      Ligne(Verin[Numero].X - VHauteur / 2, Verin[Numero].Y, Verin[Numero].X + VHauteur / 2, Verin[Numero].Y);
      Affiche_Simple(Verin[Numero].Modele == 'Double_A');
      break;

  }

  if (!Blanc) {
    if (C == '#FFFFFF') { Coul = '#FFFFFF' } else { Coul = '#FF0000' }

    NPavepetit(Verin[Numero].EntreeX[1], Verin[Numero].EntreeY[1], Coul);
    if (Verin[Numero].Modele == 'Double2' || Verin[Numero].Modele == 'Double_V') {
      NPavepetit(Verin[Numero].EntreeX[2], Verin[Numero].EntreeY[2], Coul)
    }
  }

  Couleur('#FFFFFF');


}





//Создать комманду
function Cree_Commande(XX, YY, Model) {
  Nb_Commande++;
  NewCommande(Nb_Commande);
  Commande[Nb_Commande].X = XX;
  Commande[Nb_Commande].Y = YY;
  Commande[Nb_Commande].Modele = Model;
}

//Отобразить комманду
function Affiche_Commande(Numero, C, Blanc, Deca, Etat) { //Numero - номер команды, C - цвет, Blanc - отображать или нет, Deca - смещение, Etat - 0 или 1
  var Largeur = 0, Z = 0;

  //Отобразить Левый толкатель
  function Affiche_Poussoir_Gauche() {
    Ligne(Z, Commande[Numero].Y - VHauteur / 8, Z - Largeur / 6, Commande[Numero].Y - VHauteur / 8);
    Ligne(Z, Commande[Numero].Y + VHauteur / 8, Z - Largeur / 6, Commande[Numero].Y + VHauteur / 8);
    Ligne(Z - Largeur / 6, Commande[Numero].Y - VHauteur / 6, Z - Largeur / 6, Commande[Numero].Y + VHauteur / 6);
    Arc_De_Cercle(Z - Largeur / 6, Commande[Numero].Y, 270, 90, VHauteur / 6);
  }

  if (!Blanc) { Couleur(C) } else { Couleur('#000000') } //Черный

  Z = Commande[Numero].X + Deca;
  switch (Commande[Numero].Modele) {
    case 'Scie_Droite': //Прямая пила
      Largeur = 4 / 5 * DLargeur;
      Ligne(Z, Commande[Numero].Y + 4 / 5 * DLargeur / 10, Z + 4 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y + 4 / 5 * DLargeur / 10);
      Ligne(Z + 4 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y + 4 / 5 * DLargeur / 10, Z + 4 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y - 4 / 5 * DLargeur / 10);
      Ligne(Z + 4 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y - 4 / 5 * DLargeur / 10, Z + 3 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y - 4 / 5 * DLargeur / 10);
      Ligne(Z + 1 / 2 * 4 / 5 * DLargeur, Commande[Numero].Y, Z + 3 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y - 4 / 5 * DLargeur / 10);
      Ligne(Z + 1 / 2 * 4 / 5 * DLargeur, Commande[Numero].Y, Z + 2 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y - 4 / 5 * DLargeur / 10);
      Ligne(Z + 3 / 10 * 4 / 5 * DLargeur, Commande[Numero].Y, Z + 2 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y - 4 / 5 * DLargeur / 10);
      Ligne(Z + 3 / 10 * 4 / 5 * DLargeur, Commande[Numero].Y, Z + 1 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y - 4 / 5 * DLargeur / 10);
      Ligne(Z, Commande[Numero].Y - 4 / 5 * DLargeur / 10, Z + 1 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y - 4 / 5 * DLargeur / 10);
      break;
    case 'Poussoir_Gauche': //Левый Толкатель
      Largeur = VLargeur;
      Affiche_Poussoir_Gauche();
      break;
    case 'Ressort_Droit':  //Прямая Пружина
      Largeur = DLargeur / 2;
      if (Etat == 1) { Affiche_Ressort(Z, Commande[Numero].Y, Z + 2 * Largeur, VHauteur / 4, A_Droite) }
      else { Affiche_Ressort(Z, Commande[Numero].Y, Z + Largeur / 2, VHauteur / 4, A_Droite) }
      break;
    case 'Pilote_Gauche':  //Левый Пилот
      Rect(Z - DLargeur / 2, Commande[Numero].Y - DLargeur / 6, Z, Commande[Numero].Y + DLargeur / 6);
      Ligne(Z - DLargeur / 2, Commande[Numero].Y - DLargeur / 6, Z - DLargeur / 3, Commande[Numero].Y);
      Ligne(Z - DLargeur / 2, Commande[Numero].Y + DLargeur / 6, Z - DLargeur / 3, Commande[Numero].Y);
      break;
    case 'Pilote_Droit':  //Правый Пилот
      Rect(Z + DLargeur / 2, Commande[Numero].Y - DLargeur / 6, Z, Commande[Numero].Y + DLargeur / 6);
      Ligne(Z + DLargeur / 2, Commande[Numero].Y - DLargeur / 6, Z + DLargeur / 3, Commande[Numero].Y);
      Ligne(Z + DLargeur / 2, Commande[Numero].Y + DLargeur / 6, Z + DLargeur / 3, Commande[Numero].Y);
      break;
  }

  Couleur('#000000'); //Черный
}




//Создать память
function Cree_Memoire(XC, YC, L_Etat) {  //XC,YC - координаты, L_Etat - 0 или 1
  Nb_Memoire++;
  NewMemoire(Nb_Memoire);
  Memoire[Nb_Memoire].X = XC;
  Memoire[Nb_Memoire].Y = YC;
  Memoire[Nb_Memoire].Etat = L_Etat;
  Memoire[Nb_Memoire].ExtX[1] = Memoire[Nb_Memoire].X - Dmemoire * 5 / 4;
  Memoire[Nb_Memoire].ExtY[1] = Memoire[Nb_Memoire].Y + 1 / 4 * Dmemoire;
  Memoire[Nb_Memoire].ExtX[2] = Memoire[Nb_Memoire].ExtX[1];
  Memoire[Nb_Memoire].ExtY[2] = Memoire[Nb_Memoire].Y + 3 / 4 * Dmemoire;
  Memoire[Nb_Memoire].ExtX[3] = Memoire[Nb_Memoire].X + Dmemoire * 5 / 4;
  Memoire[Nb_Memoire].ExtY[3] = Memoire[Nb_Memoire].ExtY[1];
  Memoire[Nb_Memoire].ExtX[4] = Memoire[Nb_Memoire].X;
  Memoire[Nb_Memoire].ExtY[4] = Memoire[Nb_Memoire].Y + 5 / 4 * Dmemoire;
}

//Отобразить память
function Affiche_Memoire(Numero, C, Blanc) {  //Numero номер, C - цвет, Blanc - отображать или нет
  var Coul = '';
  var Pour = 0;


  Couleur(C);

  if (C == '#FFFFFF') { Coul = '#FFFFFF' } else { Coul = '#FF00FF' }
  Rect(Memoire[Numero].X - Dmemoire, Memoire[Numero].Y, Memoire[Numero].X + Dmemoire, Memoire[Numero].Y + Dmemoire);
  Pointille(Memoire[Numero].X - Dmemoire, Memoire[Numero].Y + Dmemoire / 2, Memoire[Numero].X + Dmemoire, Memoire[Numero].Y + Dmemoire / 2);
  Ligne(Memoire[Numero].X - Dmemoire * 5 / 4, Memoire[Numero].Y + Dmemoire / 4, Memoire[Numero].X - Dmemoire, Memoire[Numero].Y + Dmemoire / 4);
  Ligne(Memoire[Numero].X + Dmemoire * 5 / 4, Memoire[Numero].Y + Dmemoire / 4, Memoire[Numero].X + Dmemoire, Memoire[Numero].Y + Dmemoire / 4);
  Ligne(Memoire[Numero].X - Dmemoire * 5 / 4, Memoire[Numero].Y + Dmemoire * 3 / 4, Memoire[Numero].X - Dmemoire, Memoire[Numero].Y + Dmemoire * 3 / 4);
  Ligne(Memoire[Numero].X, Memoire[Numero].Y + Dmemoire, Memoire[Numero].X, Memoire[Numero].Y + Dmemoire * 5 / 4);

  if (!Blanc) { for (let Pour = 1; Pour <= 4; Pour++) { NPavepetit(Memoire[Numero].ExtX[Pour], Memoire[Numero].ExtY[Pour], Coul) } }
  if (Memoire[Numero].Etat == 1) { Coul = '#000000' } else { Coul = '#FFFFFF' }
  NPave(Memoire[Numero].X + Dmemoire / 2, Memoire[Numero].Y + 3 / 4 * Dmemoire, Coul);
  if (Memoire[Numero].Etat == 2) { Coul = '#000000' } else { Coul = '#FFFFFF' }
  NPave(Memoire[Numero].X + Dmemoire / 2, Memoire[Numero].Y + 1 / 4 * Dmemoire, Coul);

  Couleur('#000000'); //Черный

}







//Создать датчик
function Cree_Capteur(XC, YC, Modelec, L_Etat) {  //XC,YC - координаты, Modelec - модель, L_Etat - 1 (несжата) или 2 (сжата)
  Nb_Capteur++;
  NewCapteur(Nb_Capteur);
  Capteur[Nb_Capteur].X = XC;
  Capteur[Nb_Capteur].Y = YC;
  if (Modelec != 'A_Galet_V') {

    switch (Modelec) {
      case 'Et':
      case 'Ou':
      case 'Inhibition':
        Capteur[Nb_Capteur].ExtX[1] = Capteur[Nb_Capteur].X - 3 / 4 * CLargeur;
        Capteur[Nb_Capteur].ExtY[1] = Capteur[Nb_Capteur].Y + 1 / 4 * CLargeur;
        Capteur[Nb_Capteur].ExtX[2] = Capteur[Nb_Capteur].ExtX[1];
        Capteur[Nb_Capteur].ExtY[2] = Capteur[Nb_Capteur].Y + 3 / 4 * CLargeur;
        Capteur[Nb_Capteur].ExtX[3] = Capteur[Nb_Capteur].X + 3 / 4 * CLargeur;
        Capteur[Nb_Capteur].ExtY[3] = Capteur[Nb_Capteur].ExtY[2];
        break;
      default:
        Capteur[Nb_Capteur].ExtX[1] = Capteur[Nb_Capteur].X - CLargeur / 2;
        Capteur[Nb_Capteur].ExtY[1] = Capteur[Nb_Capteur].Y + 5 / 4 * CLargeur;
        Capteur[Nb_Capteur].ExtX[2] = Capteur[Nb_Capteur].ExtX[1];
        Capteur[Nb_Capteur].ExtY[2] = Capteur[Nb_Capteur].Y + 7 / 4 * CLargeur;
        Capteur[Nb_Capteur].ExtX[3] = Capteur[Nb_Capteur].X + CLargeur / 2;
        Capteur[Nb_Capteur].ExtY[3] = Capteur[Nb_Capteur].ExtY[2];
    }

  }
  else {
    Capteur[Nb_Capteur].ExtX[1] = Capteur[Nb_Capteur].X + 5 / 4 * CLargeur;
    Capteur[Nb_Capteur].ExtY[1] = Capteur[Nb_Capteur].Y + 1 / 2 * CLargeur;
    Capteur[Nb_Capteur].ExtX[2] = Capteur[Nb_Capteur].X + 7 / 4 * CLargeur;
    Capteur[Nb_Capteur].ExtY[2] = Capteur[Nb_Capteur].ExtY[1];
    Capteur[Nb_Capteur].ExtX[3] = Capteur[Nb_Capteur].ExtX[2];
    Capteur[Nb_Capteur].ExtY[3] = Capteur[Nb_Capteur].Y - 1 / 2 * CLargeur;
  }
  Capteur[Nb_Capteur].Modele = Modelec;
  Capteur[Nb_Capteur].Etat = L_Etat;
}

//Отобразить датчик
function Affiche_Capteur(Numero, C, Blanc) {  //Numero- номер, C - цвет, Blanc - true или false
  var Decay = 0;
  //Остановка
  function Stop(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X + CLargeur / 5, Y);
    Ligne(X + CLargeur / 5, Y + CLargeur / 7, X + CLargeur / 5, Y - CLargeur / 7);
  }
  //Остановка вертикальная
  function Stop_V(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X, Y - CLargeur / 5);
    Ligne(X + CLargeur / 7, Y - CLargeur / 5, X - CLargeur / 7, Y - CLargeur / 5);
  }
  //Высокий толкатель
  function Poussoir_Haut(X, Y) {  //X,Y - координаты
    Ligne(X - DLargeur / 11, Y, X - DLargeur / 11, Y - DLargeur / 3);
    Ligne(X + DLargeur / 11, Y, X + DLargeur / 11, Y - DLargeur / 3);
    Ligne(X + DLargeur / 6, Y - DLargeur / 3, X - DLargeur / 6, Y - DLargeur / 3);
    Arc_De_Cercle(X, Y - DLargeur / 3, 0, 180, DLargeur / 6);
  }
  //Низкий толкатель
  function Poussoir_Bas(X, Y) {  //X,Y - координаты
    Ligne(X - DLargeur / 11, Y, X - DLargeur / 11, Y - DLargeur / 6);
    Ligne(X + DLargeur / 11, Y, X + DLargeur / 11, Y - DLargeur / 6);
    Ligne(X + DLargeur / 6, Y - DLargeur / 6, X - DLargeur / 6, Y - DLargeur / 6);
    Arc_De_Cercle(X, Y - DLargeur / 6, 0, 180, DLargeur / 6);
  }
  //Высокий ролик
  function Galet_Haut(X, Y) {  //X,Y - координаты
    Ligne(X - DLargeur / 11, Y, X - DLargeur / 11, Y - DLargeur / 3);
    Ligne(X + DLargeur / 11, Y, X + DLargeur / 11, Y - DLargeur / 3);
    Cercle(X, Y - DLargeur / 3 - DLargeur / 8, DLargeur / 6);
    Cercle(X, Y - DLargeur / 3 - DLargeur / 8, DLargeur / 12);
  }
  //Высокий Ролик вертикальный
  function Galet_Haut_V(X, Y) {  //X,Y - координаты
    Ligne(X, Y + DLargeur / 11, X - DLargeur / 3, Y + DLargeur / 11);
    Ligne(X, Y - DLargeur / 11, X - DLargeur / 3, Y - DLargeur / 11);
    Cercle(X - DLargeur / 3 - DLargeur / 8, Y, DLargeur / 6);
    Cercle(X - DLargeur / 3 - DLargeur / 8, Y, DLargeur / 12);
  }
  //Высокий толкатель
  function Galet_Bas(X, Y) {  //X,Y - координаты
    Ligne(X - DLargeur / 11, Y, X - DLargeur / 11, Y - DLargeur / 6);
    Ligne(X + DLargeur / 11, Y, X + DLargeur / 11, Y - DLargeur / 6);
    Cercle(X, Y - DLargeur / 6 - DLargeur / 8, DLargeur / 6);
    Cercle(X, Y - DLargeur / 6 - DLargeur / 8, DLargeur / 12);
  }
  //Квадратный
  function Carre(X, Y) {  //X,Y - координаты
    Rect(X - CLargeur / 2, Y, X + CLargeur / 2, Y + CLargeur);
  }
  //Левый квадрат
  function Carre_Gauche(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Ligne(X - CLargeur / 2, Y + 3 / 4 * CLargeur, X + CLargeur / 2, Y + 3 / 4 * CLargeur);
    Ligne(X + CLargeur / 2, Y + 3 / 4 * CLargeur, X + CLargeur / 4, Y + (3 / 4 - 1 / 8) * CLargeur);
    Ligne(X + CLargeur / 2, Y + 3 / 4 * CLargeur, X + CLargeur / 4, Y + (3 / 4 + 1 / 8) * CLargeur);
    Stop(X - CLargeur / 2, Y + 1 / 4 * CLargeur);
  }
  //Правый квадрат
  function Carre_Droite(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Ligne(X - CLargeur / 2, Y + 1 / 4 * CLargeur, X + CLargeur / 2, Y + 3 / 4 * CLargeur);
    Ligne(X - CLargeur / 2, Y + 1 / 4 * CLargeur, X - CLargeur / 4, Y + 1 / 4 * CLargeur);
    Ligne(X - CLargeur / 2, Y + 1 / 4 * CLargeur, X - CLargeur / 3, Y + (1 / 4 + 1 / 5) * CLargeur);
    Stop(X - CLargeur / 2, Y + 3 / 4 * CLargeur);
  }
  //Пила
  function Scie(X, Y) {  //X,Y - координаты
    Ligne(X - CLargeur / 10, Y, X - CLargeur / 10, Y + 4 / 5 * CLargeur);
    Ligne(X - CLargeur / 10, Y + 4 / 5 * CLargeur, X + CLargeur / 10, Y + 4 / 5 * CLargeur);
    Ligne(X + CLargeur / 10, Y + 4 / 5 * CLargeur, X + CLargeur / 10, Y + 3 / 5 * CLargeur);
    Ligne(X + CLargeur / 10, Y + 3 / 5 * CLargeur, X, Y + 1 / 2 * CLargeur);
    Ligne(X + CLargeur / 10, Y + 2 / 5 * CLargeur, X, Y + 1 / 2 * CLargeur);
    Ligne(X + CLargeur / 10, Y + 2 / 5 * CLargeur, X, Y + 3 / 10 * CLargeur);
    Ligne(X + CLargeur / 10, Y + 1 / 5 * CLargeur, X, Y + 3 / 10 * CLargeur);
    Ligne(X + CLargeur / 10, Y + 1 / 5 * CLargeur, X + CLargeur / 10, Y);
  }
  //Изменение шрифта
  function Change_taille() {
    ctx.font = (Math.round(8 * Facteur) + 4) + 'px Arial';
    /*if (Facteur > 2.6) { ctx.font = "bold 42pt Arial" }
    else {
      if (Facteur > 1.9) { ctx.font = "bold 18pt Arial" }
      else {
        if (Facteur >= 1) { ctx.font = "bold 10pt Arial" }
      }
    }*/
  }
  //Клетка
  function Cellule_Et(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Change_taille();
    Otxy(Math.round(X - CLargeur / 4), Math.round(Y + CLargeur / 2), '&');
    ctx.font = "bold 8pt Arial";
    Ligne(X - 3 / 4 * CLargeur, Y + 1 / 4 * CLargeur, X - CLargeur / 2, Y + 1 / 4 * CLargeur);
    Ligne(X - 3 / 4 * CLargeur, Y + 3 / 4 * CLargeur, X - CLargeur / 2, Y + 3 / 4 * CLargeur);
    Ligne(X + 3 / 4 * CLargeur, Y + 3 / 4 * CLargeur, X + CLargeur / 2, Y + 3 / 4 * CLargeur);
  }

  //Замедление клетки
  function Cellule_Inhibition(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Change_taille();
    Otxy(Math.round(X - CLargeur / 4), Math.round(Y + CLargeur / 2), '&');
    Ligne(X - 3 / 4 * CLargeur, Y + 1 / 4 * CLargeur, X - CLargeur / 2, Y + 1 / 4 * CLargeur);
    Ligne(X - 3 / 4 * CLargeur, Y + 3 / 4 * CLargeur, X - CLargeur / 2 - CLargeur / 5, Y + 3 / 4 * CLargeur);
    Cercle(X - CLargeur / 2 - CLargeur / 10, Y + 3 / 4 * CLargeur, CLargeur / 10);
    Ligne(X + 3 / 4 * CLargeur, Y + 3 / 4 * CLargeur, X + CLargeur / 2, Y + 3 / 4 * CLargeur);
  }

  function Cellule_Ou(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Change_taille();
    Ligne(X - CLargeur / 2 + 2, Y + CLargeur / 3, X - CLargeur / 4, Y + CLargeur / 2);
    Ligne(X - CLargeur / 2 + 2, Y + CLargeur * 2 / 3, X - CLargeur / 4, Y + CLargeur / 2);
    Ligne(X - CLargeur / 2 + 2 + 2, Y + CLargeur * 2 / 3 + 2, X - CLargeur / 4 + 2, Y + CLargeur / 2 + 2);
    Otxy(Math.round(X - CLargeur / 4 + 4), Math.round(Y + CLargeur / 2), '1');
    Ligne(X - 3 / 4 * CLargeur, Y + 1 / 4 * CLargeur, X - CLargeur / 2, Y + 1 / 4 * CLargeur);
    Ligne(X - 3 / 4 * CLargeur, Y + 3 / 4 * CLargeur, X - CLargeur / 2, Y + 3 / 4 * CLargeur);
    Ligne(X + 3 / 4 * CLargeur, Y + 3 / 4 * CLargeur, X + CLargeur / 2, Y + 3 / 4 * CLargeur);
  }



  if (!Blanc) { Couleur(C) } else { Couleur('#000000') } //Черный
  Couleur(C);

  switch (Capteur[Numero].Modele) {

    case 'Inhibition': Cellule_Inhibition(Capteur[Numero].X, Capteur[Numero].Y);
      break;
    case 'Et': Cellule_Et(Capteur[Numero].X, Capteur[Numero].Y);
      break;
    case 'Ou': Cellule_Ou(Capteur[Numero].X, Capteur[Numero].Y);
      break;
    default:
      if (Capteur[Numero].Modele != 'A_Galet_V') {
        if (Capteur[Numero].Etat == 2) { Decay = CLargeur } else { Decay = 0 }

        Carre_Gauche(Capteur[Numero].X, Capteur[Numero].Y + Decay);
        Carre_Droite(Capteur[Numero].X, Capteur[Numero].Y + CLargeur + Decay);

        if ((Capteur[Numero].Modele == 'A_Poussoir') || (Capteur[Numero].Modele == 'A_Poussoir_Bistable')) { Poussoir_Haut(Capteur[Numero].X, Capteur[Numero].Y + Decay) }
        else { Galet_Haut(Capteur[Numero].X, Capteur[Numero].Y + Decay) }

        if (Capteur[Numero].Modele == 'A_Poussoir_Bistable') { Scie(Capteur[Numero].X, Capteur[Numero].Y + 2 * CLargeur + Decay) }
        else {
          if (Capteur[Numero].Etat == 1) { Affiche_Ressort_Vertical(Capteur[Numero].X, Capteur[Numero].Y + 2 * CLargeur + Decay, Capteur[Numero].Y + 2 * CLargeur + 3 * CLargeur / 2 + Decay, CLargeur / 2, true) }
          else { Affiche_Ressort_Vertical(Capteur[Numero].X, Capteur[Numero].Y + 2 * CLargeur + Decay, Capteur[Numero].Y + 2 * CLargeur + CLargeur / 2 + Decay, CLargeur / 2, true) }
        }
      }
      else {
        if (Capteur[Numero].Etat == 2) { Decay = CLargeur } else { Decay = 0 }

        Rect(Capteur[Numero].X + Decay, Capteur[Numero].Y - CLargeur / 2, Capteur[Numero].X + CLargeur + Decay, Capteur[Numero].Y + CLargeur / 2);
        Rect(Capteur[Numero].X + CLargeur + Decay, Capteur[Numero].Y - CLargeur / 2, Capteur[Numero].X + CLargeur + CLargeur + Decay, Capteur[Numero].Y + CLargeur / 2);
        Galet_Haut_V(Capteur[Numero].X + Decay, Capteur[Numero].Y);
        Stop_V(Capteur[Numero].X + CLargeur / 4 + Decay, Capteur[Numero].Y + CLargeur / 2);
        Stop_V(Capteur[Numero].X + CLargeur + 3 * CLargeur / 4 + Decay, Capteur[Numero].Y + CLargeur / 2);
        Ligne(Capteur[Numero].X + 3 / 4 * CLargeur + Decay, Capteur[Numero].Y - CLargeur / 2, Capteur[Numero].X + 3 / 4 * CLargeur + Decay, Capteur[Numero].Y + CLargeur / 2);
        Ligne(Capteur[Numero].X + 3 / 4 * CLargeur + Decay, Capteur[Numero].Y - CLargeur / 2, Capteur[Numero].X + (3 / 4 + 1 / 8) * CLargeur + Decay, Capteur[Numero].Y - CLargeur / 4);
        Ligne(Capteur[Numero].X + 3 / 4 * CLargeur + Decay, Capteur[Numero].Y - CLargeur / 2, Capteur[Numero].X + (3 / 4 - 1 / 8) * CLargeur + Decay, Capteur[Numero].Y - CLargeur / 4);
        Ligne(Capteur[Numero].X + 5 / 4 * CLargeur + Decay, Capteur[Numero].Y + CLargeur / 2, Capteur[Numero].X + 7 / 4 * CLargeur + Decay, Capteur[Numero].Y - CLargeur / 2);
        Ligne(Capteur[Numero].X + 5 / 4 * CLargeur + Decay, Capteur[Numero].Y + CLargeur / 2, Capteur[Numero].X + 5 / 4 * CLargeur + Decay, Capteur[Numero].Y + CLargeur / 4);
        Ligne(Capteur[Numero].X + 5 / 4 * CLargeur + Decay, Capteur[Numero].Y + CLargeur / 2, Capteur[Numero].X + (5 / 4 + 1 / 5) * CLargeur + Decay, Capteur[Numero].Y + CLargeur / 3);

        if (Capteur[Numero].Etat == 1) { Affiche_Ressort(Capteur[Numero].X + 2 * CLargeur + Decay, Capteur[Numero].Y, Capteur[Numero].X + 2 * CLargeur + 3 * CLargeur / 2 + Decay, CLargeur / 2, true) }
        else { Affiche_Ressort(Capteur[Numero].X + 2 * CLargeur + Decay, Capteur[Numero].Y, Capteur[Numero].X + 2 * CLargeur + CLargeur / 2 + Decay, CLargeur / 2, true) }
      }
      break;
  }
  Couleur('#000000');

}






//Создать гидрораспределитель
function Cree_Distributeur(XC, YC, Modelec, Commande1, Commande2, L_Etat) {
  //XC,YC - координаты, Modelec - модель, Commande1,Commande2 - тип толкателя, L_Etat - 
  Nb_Distributeur++;
  NewDistributeur(Nb_Distributeur);

  Distributeur[Nb_Distributeur].X = XC;
  Distributeur[Nb_Distributeur].Y = YC;

  switch (Modelec) {
    case '_4_3':
    case '_5_3':
      Distributeur[Nb_Distributeur].ExtX[-1] = XC - DLargeur / 2 - DLargeur;
      Distributeur[Nb_Distributeur].ExtX[0] = XC + 4 * DLargeur + DLargeur / 2;
      break;
    default:
      Distributeur[Nb_Distributeur].ExtX[-1] = XC - DLargeur / 2;
      Distributeur[Nb_Distributeur].ExtX[0] = XC + 3 * DLargeur + DLargeur / 2;
  }

  Distributeur[Nb_Distributeur].ExtY[-1] = YC;
  Distributeur[Nb_Distributeur].ExtY[0] = YC;

  Distributeur[Nb_Distributeur].ExtX[2] = Distributeur[Nb_Distributeur].X + 9 / 5 * DLargeur;
  Distributeur[Nb_Distributeur].ExtY[2] = Distributeur[Nb_Distributeur].Y + DLargeur / 2;
  Distributeur[Nb_Distributeur].ExtX[3] = Distributeur[Nb_Distributeur].X + 9 / 5 * DLargeur;
  Distributeur[Nb_Distributeur].ExtY[3] = Distributeur[Nb_Distributeur].Y - DLargeur / 2;
  Distributeur[Nb_Distributeur].ExtX[4] = Distributeur[Nb_Distributeur].X + 6 / 5 * DLargeur;
  Distributeur[Nb_Distributeur].ExtY[4] = Distributeur[Nb_Distributeur].Y - DLargeur / 2;

  switch (Modelec) {
    case '_3_2':
    case '_4_2':
    case '_4_3':
      Distributeur[Nb_Distributeur].ExtX[1] = Distributeur[Nb_Distributeur].X + 6 / 5 * DLargeur;
      Distributeur[Nb_Distributeur].ExtY[1] = Distributeur[Nb_Distributeur].Y + DLargeur / 2;
      Distributeur[Nb_Distributeur].ExtX[5] = Distributeur[Nb_Distributeur].X + 1.5 * DLargeur;
      Distributeur[Nb_Distributeur].ExtY[5] = Distributeur[Nb_Distributeur].Y + DLargeur / 2;
      break;
    case '_5_2':
    case '_5_3':
      Distributeur[Nb_Distributeur].ExtX[5] = Distributeur[Nb_Distributeur].X + 6 / 5 * DLargeur;
      Distributeur[Nb_Distributeur].ExtY[5] = Distributeur[Nb_Distributeur].Y + DLargeur / 2;
      Distributeur[Nb_Distributeur].ExtX[1] = Distributeur[Nb_Distributeur].X + 1.5 * DLargeur;
      Distributeur[Nb_Distributeur].ExtY[1] = Distributeur[Nb_Distributeur].Y + DLargeur / 2;
      break;
    case '_2_2':
    case '_2_2_':
      Distributeur[Nb_Distributeur].ExtX[1] = Distributeur[Nb_Distributeur].X + 1.5 * DLargeur;
      Distributeur[Nb_Distributeur].ExtY[1] = Distributeur[Nb_Distributeur].Y + DLargeur / 2;
      Distributeur[Nb_Distributeur].ExtX[5] = Distributeur[Nb_Distributeur].ExtX[1];
      Distributeur[Nb_Distributeur].ExtY[5] = Distributeur[Nb_Distributeur].Y + DLargeur / 2;
      Distributeur[Nb_Distributeur].ExtX[4] = Distributeur[Nb_Distributeur].ExtX[1];
      Distributeur[Nb_Distributeur].ExtY[4] = Distributeur[Nb_Distributeur].Y - DLargeur / 2;
      break;
  }

  Distributeur[Nb_Distributeur].Modele = Modelec;
  Distributeur[Nb_Distributeur].Etat = L_Etat;

  Cree_Commande(Distributeur[Nb_Distributeur].X, Distributeur[Nb_Distributeur].Y, Commande1);
  Commande[Nb_Commande].Etat = L_Etat;
  Distributeur[Nb_Distributeur].Com[1].Quoi = Commande1;
  Distributeur[Nb_Distributeur].Com[1].Laquelle = Nb_Commande;
  if ((Modelec == '_4_3') || (Modelec == '_5_3')) {
    Cree_Commande(Distributeur[Nb_Distributeur].X + 3 * DLargeur, Distributeur[Nb_Distributeur].Y, Commande2)
  }
  else {
    Cree_Commande(Distributeur[Nb_Distributeur].X + 2 * DLargeur, Distributeur[Nb_Distributeur].Y, Commande2)
  }
  Commande[Nb_Commande].Etat = L_Etat;
  Distributeur[Nb_Distributeur].Com[2].Quoi = Commande2;
  Distributeur[Nb_Distributeur].Com[2].Laquelle = Nb_Commande;

}
//Отобразить гидрораспределитель
function Affiche_Distributeur(Numero, C, Blanc) {
  //Numero - номер, C - цвет, Blanc - отображать или нет
  var Coul = '';
  var XDeca = 0;
  //Стрелка вверх
  function Fleche_Haut(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X, Y - DLargeur);
    Ligne(X, Y - DLargeur, X - DLargeur / 20, Y - DLargeur + DLargeur / 5);
    Ligne(X, Y - DLargeur, X + DLargeur / 20, Y - DLargeur + DLargeur / 5);
  }
  //Стрелка вниз
  function Fleche_Bas(X, Y) {  //X,Y - координаты
    //Опорная точка ниже
    Ligne(X, Y, X, Y - DLargeur);
    Ligne(X, Y, X - DLargeur / 20, Y - 0.2 * DLargeur);
    Ligne(X, Y, X + DLargeur / 20, Y - 0.2 * DLargeur);
  }
  //Квадрат
  function Carre(X, Y) {  //X,Y - координаты
    Rect(X, Y - DLargeur / 2, X + DLargeur, Y + DLargeur / 2);
  }
  //Площадь Высокий Низкий
  function Carre_Haut_Bas(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Fleche_Haut(X + DLargeur / 5, Y + DLargeur / 2);
    Fleche_Bas(X + 0.8 * DLargeur, Y + DLargeur / 2);
  }
  //Стоп Низкий
  function Stop_Bas(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X, Y - DLargeur / 5);
    Ligne(X - DLargeur / 10, Y - DLargeur / 5, X + DLargeur / 10, Y - DLargeur / 5);
  }
  //Стоп Высокий
  function Stop_Haut(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X, Y + DLargeur / 5);
    Ligne(X - DLargeur / 10, Y + DLargeur / 5, X + DLargeur / 10, Y + DLargeur / 5);
  }
  //Косая стрелка вниз
  function Fleche_Oblique_Bas(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X + 0.6 * DLargeur, Y + DLargeur);
    Ligne(X + 0.60 * DLargeur, Y + DLargeur, X + 0.60 * DLargeur - DLargeur / 30, Y + DLargeur - DLargeur / 5);
    Ligne(X + 0.60 * DLargeur, Y + DLargeur, X + 0.43 * DLargeur, Y + 0.9 * DLargeur);
  }
  //Косая стрелка вверх
  function Fleche_Oblique_Haut(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X + 0.60 * DLargeur, Y - DLargeur);
    Ligne(X + 0.60 * DLargeur, Y - DLargeur, X + 0.60 * DLargeur - DLargeur / 30, Y - DLargeur + DLargeur / 5);
    Ligne(X + 0.60 * DLargeur, Y - DLargeur, X + 0.43 * DLargeur, Y - 0.9 * DLargeur);
  }
  //Площадь Вверх Стоп
  function Carre_Haut_Stop(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Fleche_Haut(X + DLargeur / 5, Y + DLargeur / 2);
    Stop_Bas(X + DLargeur - DLargeur / 5, Y + DLargeur / 2);
  }
  //Квадратная стрелка
  function Carre_Fleche(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Fleche_Haut(X + DLargeur / 2, Y + DLargeur / 2);
  }
  //Квадрат Стоп Стоп
  function Carre_Stop_Stop(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Stop_Bas(X + DLargeur / 2, Y + DLargeur / 2);
    Stop_Haut(X + DLargeur / 2, Y - DLargeur / 2);
  }
  //Квадрат Стоп Косой
  function Carre_Stop_Oblique(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Stop_Bas(X + DLargeur / 5, Y + DLargeur / 2);
    Fleche_Oblique_Bas(X + DLargeur / 5, Y - DLargeur / 2);
  }
  //Квадрат Косой Косой
  function Carre_Oblique_Oblique(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Fleche_Oblique_Bas(X + DLargeur / 5, Y - DLargeur / 2);
    Fleche_Oblique_Haut(X + DLargeur / 5, Y + DLargeur / 2);
  }
  //Стрелка наполовину наклонная вверху справа
  function Fleche_Demi_Oblique_Haut_Droite(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X + 0.30 * DLargeur, Y - DLargeur);
    Ligne(X + 0.30 * DLargeur, Y - DLargeur, X + 0.30 * DLargeur + DLargeur / 30, Y - DLargeur + DLargeur / 5);
    Ligne(X + 0.30 * DLargeur, Y - DLargeur, X + 0.16 * DLargeur, Y - 0.87 * DLargeur);
  }
  //Стрелка наполовину полукруглый верхний левый
  function Fleche_Demi_Oblique_Haut_Gauche(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X - 0.30 * DLargeur, Y - DLargeur);
    Ligne(X - 0.30 * DLargeur, Y - DLargeur, X - 0.30 * DLargeur - DLargeur / 30, Y - DLargeur + DLargeur / 5);
    Ligne(X - 0.30 * DLargeur, Y - DLargeur, X - 0.16 * DLargeur, Y - 0.87 * DLargeur);
  }
  //Квадрат
  function Carre_1_5_2(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Fleche_Bas(X + 0.2 * DLargeur, Y + DLargeur / 2);
    Stop_Bas(X + 0.8 * DLargeur, Y + DLargeur / 2);
    Fleche_Demi_Oblique_Haut_Droite(X + 0.5 * DLargeur, Y + DLargeur / 2);
  }
  //Квадрат
  function Carre_2_5_2(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Fleche_Bas(X + 0.8 * DLargeur, Y + DLargeur / 2);
    Stop_Bas(X + 0.2 * DLargeur, Y + DLargeur / 2);
    Fleche_Demi_Oblique_Haut_Gauche(X + 0.5 * DLargeur, Y + DLargeur / 2);
  }
  //Квадрат 4 стоп
  function Carre4stop(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Stop_Bas(X + 0.2 * DLargeur, Y + DLargeur / 2);
    Stop_Bas(X + 0.8 * DLargeur, Y + DLargeur / 2);
    Stop_Haut(X + 0.2 * DLargeur, Y - DLargeur / 2);
    Stop_Haut(X + 0.8 * DLargeur, Y - DLargeur / 2);
  }
  //Квадрат 2 стрелки
  function Carre2fleches(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Fleche_Bas(X + 0.2 * DLargeur, Y + DLargeur / 2);
    Fleche_Bas(X + 0.8 * DLargeur, Y + DLargeur / 2);
    Stop_Bas(X + 0.5 * DLargeur, Y + DLargeur / 2);
  }



  if (!Blanc) { Couleur(C) } else { Couleur('#000000') } //Черный
  Couleur(C);

  if (Distributeur[Numero].Etat == 1) { XDeca = 0 } else { if (Distributeur[Numero].Etat == 2) { XDeca = DLargeur } else { if (Distributeur[Numero].Etat == 3) { XDeca = -DLargeur } } }
  switch (Distributeur[Numero].Modele) {
    case '_3_2':
      Carre_Haut_Stop(Distributeur[Numero].X + XDeca, Distributeur[Numero].Y);
      Carre_Stop_Oblique(Distributeur[Numero].X + XDeca + DLargeur, Distributeur[Numero].Y);
      Ligne(Distributeur[Numero].X + 9 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2, Distributeur[Numero].X + 9 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Triangle(Distributeur[Numero].X + 9 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      break;
    case '_5_2':
      Carre_2_5_2(Distributeur[Numero].X + XDeca, Distributeur[Numero].Y);
      Carre_1_5_2(Distributeur[Numero].X + XDeca + DLargeur, Distributeur[Numero].Y);
      Ligne(Distributeur[Numero].X + 9 / 5 * DLargeur + XDeca, Distributeur[Numero].Y + DLargeur / 2, Distributeur[Numero].X + 9 / 5 * DLargeur + XDeca, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Triangle(Distributeur[Numero].X + 9 / 5 * DLargeur + XDeca, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Ligne(Distributeur[Numero].X + 6 / 5 * DLargeur + XDeca, Distributeur[Numero].Y + DLargeur / 2, Distributeur[Numero].X + 6 / 5 * DLargeur + XDeca, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Triangle(Distributeur[Numero].X + 6 / 5 * DLargeur + XDeca, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      break;
    case '_5_3':
      Carre_2_5_2(Distributeur[Numero].X + XDeca, Distributeur[Numero].Y);
      Carre2fleches(Distributeur[Numero].X + DLargeur + XDeca, Distributeur[Numero].Y);
      Carre_1_5_2(Distributeur[Numero].X + XDeca + DLargeur + DLargeur, Distributeur[Numero].Y);
      Ligne(Distributeur[Numero].X + 9 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2, Distributeur[Numero].X + 9 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Triangle(Distributeur[Numero].X + 9 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Ligne(Distributeur[Numero].X + 6 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2, Distributeur[Numero].X + 6 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Triangle(Distributeur[Numero].X + 6 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      break;
    case '_4_2':
      Carre_Haut_Bas(Distributeur[Numero].X + XDeca, Distributeur[Numero].Y);
      Carre_Oblique_Oblique(Distributeur[Numero].X + XDeca + DLargeur, Distributeur[Numero].Y);
      Ligne(Distributeur[Numero].X + 9 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2, Distributeur[Numero].X + 9 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Triangle(Distributeur[Numero].X + 9 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      break;
    case '_4_3':
      Carre_Haut_Bas(Distributeur[Numero].X + XDeca, Distributeur[Numero].Y);
      Carre4stop(Distributeur[Numero].X + DLargeur + XDeca, Distributeur[Numero].Y);
      Carre_Oblique_Oblique(Distributeur[Numero].X + XDeca + 2 * DLargeur, Distributeur[Numero].Y);
      Ligne(Distributeur[Numero].X + 9 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2, Distributeur[Numero].X + 9 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Triangle(Distributeur[Numero].X + 9 / 5 * DLargeur, Distributeur[Numero].Y + DLargeur / 2 + DLargeur / 8);
      break;
    case '_2_2':
      Carre_Stop_Stop(Distributeur[Numero].X + XDeca + DLargeur, Distributeur[Numero].Y);
      Carre_Fleche(Distributeur[Numero].X + XDeca, Distributeur[Numero].Y);
      break;
    case '_2_2_':
      Carre_Stop_Stop(Distributeur[Numero].X + XDeca, Distributeur[Numero].Y);
      Carre_Fleche(Distributeur[Numero].X + XDeca + DLargeur, Distributeur[Numero].Y);
      break;
  }
  if (C == '#FFFFFF') { Coul = '#FFFFFF' } else { Coul = '#FF00FF' }
  if (!Blanc) { Couleur(Coul) } else { Couleur('#000000') }

  if ((Distributeur[Numero].Com[1].Quoi == 'Pilote_Gauche') || (Distributeur[Numero].Com[1].Quoi == 'Pilote_Droit')) {

    switch (Distributeur[Numero].Modele) {
      case '_4_3':
      case '_5_3':
        Ligne(Distributeur[Numero].ExtX[-1], Distributeur[Numero].Y, Distributeur[Numero].ExtX[-1] + XDeca + DLargeur, Distributeur[Numero].Y);
        break;
      default:
        Ligne(Distributeur[Numero].ExtX[-1], Distributeur[Numero].Y, Distributeur[Numero].ExtX[-1] + XDeca, Distributeur[Numero].Y);
    }
  }

  if ((Distributeur[Numero].Com[2].Quoi == 'Pilote_Gauche') || (Distributeur[Numero].Com[2].Quoi == 'Pilote_Droit')) {

    switch (Distributeur[Numero].Modele) {
      case '_4_3':
      case '_5_3':
        Ligne(Distributeur[Numero].ExtX[0] + XDeca - DLargeur, Distributeur[Numero].Y, Distributeur[Numero].ExtX[0], Distributeur[Numero].Y);
        break;
      default:
        Ligne(Distributeur[Numero].ExtX[0] - XDeca, Distributeur[Numero].Y, Distributeur[Numero].ExtX[0] - DLargeur, Distributeur[Numero].Y);
    }
  }

  Affiche_Commande(Distributeur[Numero].Com[1].Laquelle, C, Blanc, XDeca, Distributeur[Numero].Etat);
  Affiche_Commande(Distributeur[Numero].Com[2].Laquelle, C, Blanc, XDeca, Distributeur[Numero].Etat);

  Couleur(C);
  if ((Distributeur[Numero].Modele == '_4_3') || (Distributeur[Numero].Modele == '_5_3')) {
    if (Distributeur[Numero].Etat == 3) { Affiche_Ressort(Distributeur[Numero].X - DLargeur / 4 + XDeca, Distributeur[Numero].Y + DLargeur / 3, Distributeur[Numero].X + XDeca, DLargeur / 4, true) }
    else { Affiche_Ressort(Distributeur[Numero].X - DLargeur + XDeca, Distributeur[Numero].Y + DLargeur / 3, Distributeur[Numero].X + XDeca, DLargeur / 4, true) }
    if (Distributeur[Numero].Etat == 2) { Affiche_Ressort(Distributeur[Numero].X + 3 * DLargeur + XDeca, Distributeur[Numero].Y + DLargeur / 3, Distributeur[Numero].X + 3 * DLargeur + DLargeur / 4 + XDeca, DLargeur / 4, true) }
    else { Affiche_Ressort(Distributeur[Numero].X + 3 * DLargeur + XDeca, Distributeur[Numero].Y + DLargeur / 3, Distributeur[Numero].X + 3 * DLargeur + DLargeur + XDeca, DLargeur / 4, true) }
  }

  Couleur('#000000');

}






//Отобразить канал
function Affiche_Canal(Numero, Blanc) {  //
  var Pour = 0;
  Xe = 0;
  Ye = 0;
  ctx.lineWidth = 2; //Толщина линии 2

  if (!Blanc) { if (Canal[Numero].Etat == Un) { Couleur('#FF0000') } else { Couleur('#000000') } } else { Couleur('#000000') }
  Xe = Canal[Numero].ParcoursX[1];
  Ye = Canal[Numero].ParcoursY[1];

  for (let Pour = 2; Pour <= Canal[Numero].NbPoint; Pour++) {
    Ligne(Xe, Ye, Canal[Numero].ParcoursX[Pour], Canal[Numero].ParcoursY[Pour]);
    Xe = Canal[Numero].ParcoursX[Pour];
    Ye = Canal[Numero].ParcoursY[Pour];

  }

  Couleur('#000000');
  ctx.lineWidth = 1; //Толщина линии 1
}

//Отобразить канал пилота
function Affiche_Canal_Pilote(Numero, Blanc) {  //
  var Pour = 0;
  Xe = 0;
  Ye = 0;

  if (!Blanc) {
    switch (Canal_Pilote[Numero].Etat) {
      case 0: Couleur('#000000');
        break;
      case 1: Couleur('#FF00FF');
        break;
      case 2: Couleur('#808080');
        break;
    }
  }
  Xe = Canal_Pilote[Numero].ParcoursX[1];
  Ye = Canal_Pilote[Numero].ParcoursY[1];
  for (let Pour = 2; Pour <= Canal_Pilote[Numero].NbPoint; Pour++) {
    Ligne(Xe, Ye, Canal_Pilote[Numero].ParcoursX[Pour], Canal_Pilote[Numero].ParcoursY[Pour]);
    Xe = Canal_Pilote[Numero].ParcoursX[Pour];
    Ye = Canal_Pilote[Numero].ParcoursY[Pour];
  }

  Couleur('#000000');
}

//Отобразить питание
function Affiche_Alimentation(Numero, C, Blanc) {  //

  if (!Blanc) { Couleur(C) } else { Couleur('#000000') }
  Cercle(AliMentation[Numero].X, AliMentation[Numero].Y, ARayon);
  if (!Blanc) { NPavepetit(AliMentation[Numero].X, AliMentation[Numero].Y - 0.2, C) } else { NPavepetit(X, Y - 0.2, '#000000') }

  Couleur('#000000');
}

//Отобразить питание пилота
function Affiche_Alim_Pilote(Numero, C, Blanc) {  //

  if (!Blanc) { Couleur(C) } else { Couleur('#000000') }
  Cercle(Alim_Pilote[Numero].X, Alim_Pilote[Numero].Y, ARayon);
  if (!Blanc) { NPavepetit(Alim_Pilote[Numero].X, Alim_Pilote[Numero].Y - 0.2, C) } else { NPavepetit(Alim_Pilote[Numero].X, Alim_Pilote[Numero].Y - 0.2, '#000000') }

  Couleur('#000000');
}

//Отобразить пересечение
function Affiche_Carrefour(Numero, Blanc) {  //
  var Co = '';

  if (!Blanc) { Co = '#FF0000' } else { Co = '#000000' }
  NPavepetit(Carrefour[Numero].X, Carrefour[Numero].Y, Co);
}

//Отобразить пересечение пилота
function Affiche_Carrefour_Pilote(Numero, Blanc) {  //
  var Co = '';

  if (!Blanc) { Co = '#800080' } else { Co = '#000000'; }
  NPavepetit(Carrefour_Pilote[Numero].X, Carrefour_Pilote[Numero].Y, Co);
}

//Отобразить текст
function Affiche_Texte(Numero, C) {  //
  Couleur(C);
  ctx.font = (Math.round(Texte[Numero].Lataille * 8 * Facteur) + 4) + 'px Arial';
  Otxy(Math.round(Texte[Numero].X), Math.round(Texte[Numero].Y - Texte[Numero].Lataille * 6 - 4), Texte[Numero].Le_Texte);
  ctx.font.height = (Math.round(8 * Facteur)) + 'px Arial';
  Couleur('#000000');
}


function Redessprinc(Blanc) {  // Отображение компонентов на экране
  var Pour = 0;
  //ctx.font = '10px Arial'

  for (let Pour = 1; Pour <= Nb_Canal; Pour++) { Affiche_Canal(Pour, Blanc) }
  for (let Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) { Affiche_Canal_Pilote(Pour, Blanc) }
  for (let Pour = 1; Pour <= Nb_Verin; Pour++) { Affiche_Verin(Pour, '#000000', Blanc) }
  for (let Pour = 1; Pour <= Nb_Distributeur; Pour++) { Affiche_Distributeur(Pour, '#000000', Blanc) }
  for (let Pour = 1; Pour <= Nb_Capteur; Pour++) { Affiche_Capteur(Pour, '#000000', Blanc) }
  for (let Pour = 1; Pour <= Nb_Alimentation; Pour++) { Affiche_Alimentation(Pour, '#FF0000', Blanc) }
  for (let Pour = 1; Pour <= Nb_Alim_Pilote; Pour++) { Affiche_Alim_Pilote(Pour, '#800080', Blanc) }
  for (let Pour = 1; Pour <= Nb_Carrefour_Pilote; Pour++) { Affiche_Carrefour_Pilote(Pour, Blanc) }
  for (let Pour = 1; Pour <= Nb_Carrefour; Pour++) { Affiche_Carrefour(Pour, Blanc) }
  for (let Pour = 1; Pour <= Nb_Memoire; Pour++) { Affiche_Memoire(Pour, '#000000', Blanc) }
  for (let Pour = 1; Pour <= Nb_Sequenceur; Pour++) { Affiche_Sequenceur(Pour, Blanc) }
  for (let Pour = 1; Pour <= Nb_Valve; Pour++) { Affiche_Valve(Pour, '#000000', Blanc) }
  for (let Pour = 1; Pour <= Nb_Manometr; Pour++) { Affiche_Manometr(Pour, '#000000', Blanc) }
  for (let Pour = 1; Pour <= Nb_Texte; Pour++) { Affiche_Texte(Pour, '#000000') }

  //ctx.font = '10px Arial'
}

function Redess(Blanc) {  //
  ClearDevice();
  Redessprinc(Blanc);

}

//Очистка ненужных элементов
function ClearObjet() {
  Verin.splice(Nb_Verin + 1, Max_Verin);
  Distributeur.splice(Nb_Distributeur + 1, Max_Distributeur);
  Commande.splice(Nb_Commande + 1, Max_Commande);
  Canal.splice(Nb_Canal + 1, Max_Canal);
  Canal_Pilote.splice(Nb_Canal_Pilote + 1, Max_Canal_Pilote);
  AliMentation.splice(Nb_Alimentation + 1, Max_Alimentation);
  Capteur.splice(Nb_Capteur + 1, Max_Capteur);
  Alim_Pilote.splice(Nb_Alim_Pilote + 1, Max_Alim_Pilote);
  Carrefour.splice(Nb_Carrefour + 1, Max_Carrefour);
  Carrefour_Pilote.splice(Nb_Carrefour_Pilote + 1, Max_Carrefour_Pilote);
  Memoire.splice(Nb_Memoire + 1, Max_Memoire);
  Sequenceur.splice(Nb_Sequenceur + 1, Max_Sequenceur);
  Valve.splice(Nb_Valve + 1, Max_Valve);
  Manometr.splice(Nb_Manometr + 1, Max_Manometr);
  Texte.splice(Nb_Texte + 1, Max_Texte);
}

//Создание формы
function FormCreate() {

  SVG = false;
  Pasapas = true;
  DoubleBuffered = true;
  Facteur = 1;
  Fichiermodifie = false;

  Heure = false;
  Super_Raz();

  Redess(false);

  Compteursouris = 0;

  Immonde_rustine_double_v = false;
  Immonde_rustine_galet_v = false;

}

//Вывод текста в верхнюю строку
function PetitMenu(couleur, s) {
  document.getElementById('placeForText').innerHTML = s;
  document.getElementById('placeForText').style.color = couleur;

}

//Выход по нажатию правой кнопки мыши
function Cestfini() {  //

  Redess(false);
  PetitMenu('#FFFFFF', 'Pfff');
  funcCursor('default'); //Курсор в виде стрелки
  Couleur('#000000');

}












//Создать питание
function Cree_Alimentation(Xe, Ye) {  //
  Nb_Alimentation++;
  NewAliMentation(Nb_Alimentation);
  AliMentation[Nb_Alimentation].X = Xe;
  AliMentation[Nb_Alimentation].Y = Ye;
}

//Создать питание пилота
function Cree_Alim_Pilote(Xe, Ye) {  //
  Nb_Alim_Pilote++;
  NewAlim_Pilote(Nb_Alim_Pilote);
  Alim_Pilote[Nb_Alim_Pilote].X = Xe;
  Alim_Pilote[Nb_Alim_Pilote].Y = Ye;
}

//Создать пересечение
function Cree_Carrefour(Xe, Ye) {  //
  Nb_Carrefour++;
  NewCarrefour(Nb_Carrefour);
  Carrefour[Nb_Carrefour].X = Xe;
  Carrefour[Nb_Carrefour].Y = Ye;
  Etat = Zero;
}

//Создать пересечение пилота
function Cree_Carrefour_Pilote(Xe, Ye) {  //
  Nb_Carrefour_Pilote++;
  NewCarrefour_Pilote(Nb_Carrefour_Pilote);
  Carrefour_Pilote[Nb_Carrefour_Pilote].X = Xe;
  Carrefour_Pilote[Nb_Carrefour_Pilote].Y = Ye;
  Etat = Bof;
}

//Отображение 
function Ou_Que() {  //Old_X, Old_Y - координаты   Objet - выводимый объект
  var X = 0;
  var Y = 0;

  funcCursor('crosshair');   //Курсор в виде креста
  Couleur('#000000');
  X = X_s;     //Координаты курсора
  Y = Y_s;
  Old_X = X;   //Для совместимости
  Old_Y = Y;
  Lax2 = X;   //Для совместимости
  Lay2 = Y;

}

//Создать текст
function Cree_Texte() {  //

  var Quoi_Donc = '';
  var Xe = 300;
  var Ye = 200;
  Quoi_Donc = 'Un_Texte';
  PetitMenu('#808080', '<Текст> Положение текста ?, правая кнопка = Назад');
  Ou_Que(Xe, Ye, false, Quoi_Donc);

}

//Создать текст
function Cree_Texte2() {  //Ввод текста
  var Textenter = '';
  var Poured = false;
  var Quoi_Donc = '';
  var Xe = 300;
  var Ye = 200;

  if (Quoi_Donc == 'Ouste') {
    Redess(false);
    PetitMenu('#FFFFFF', 'Air simulator');
    return false;
  }

  Textenter = Ed('Введите текст : ', '', Poured);


  if (Textenter != '') {
    Nb_Texte++;
    NewTexte(Nb_Texte);

    Texte[Nb_Texte].X = X_s / Facteur;
    Texte[Nb_Texte].Y = Y_s / Facteur;

    Texte[Nb_Texte].Le_Texte = Textenter;
    Texte[Nb_Texte].Lataille = 1;
    Redess(false);
  }

}

function AD(X, Increment) {  //
  X = X + Increment;
}


function Pause(PTime) {
  PTime = PTime * 1000;
  Sleep(PTime);
}

function Sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}











//Создать запорную арматуру
function Cree_Valve(XC, YC, Modelec, L_Etat) {
  //XC,YC - координаты, Modelec - модель,  L_Etat - состояние запорной арматуры 1 - открыта, 2 - закрыта
  Nb_Valve++;
  NewValve(Nb_Valve);

  Valve[Nb_Valve].X = XC;
  Valve[Nb_Valve].Y = YC;

  switch (Modelec) {

    case 'Shutoff_valve':
      Valve[Nb_Valve].EntreeX[1] = XC - 30;
      Valve[Nb_Valve].EntreeY[1] = YC;
      Valve[Nb_Valve].EntreeX[2] = XC + 30;
      Valve[Nb_Valve].EntreeY[2] = YC;
      break;
    case 'Check_valve':
      Valve[Nb_Valve].EntreeX[1] = XC - 15;
      Valve[Nb_Valve].EntreeY[1] = YC;
      Valve[Nb_Valve].EntreeX[2] = XC + 15;
      Valve[Nb_Valve].EntreeY[2] = YC;
  }

  Valve[Nb_Valve].Modele = Modelec;
  Valve[Nb_Valve].Etat = L_Etat;

}
//Отобразить запорную арматуру
function Affiche_Valve(Numero, C, Blanc) {
  //Numero - номер, C - цвет, Blanc - отображать или нет
  var Coul = '';
  //var XDeca = 0;

  if (!Blanc) { Couleur(C) } else { Couleur('#000000') } //Черный
  Couleur(C);

  //if (Valve[Numero].Etat == 1) { XDeca = 0 } else { if (Valve[Numero].Etat == 2) { XDeca = DLargeur } else { if (Valve[Numero].Etat == 3) { XDeca = -DLargeur } } }

  switch (Valve[Numero].Modele) {
    case 'Shutoff_valve':
      if (Valve[Numero].Etat == 1) {
        Triangle2(Valve[Numero].X - 20, Valve[Numero].Y + 10, Valve[Numero].X - 20, Valve[Numero].Y - 10, Valve[Numero].X, Valve[Numero].Y, false);
        Triangle2(Valve[Numero].X + 20, Valve[Numero].Y + 10, Valve[Numero].X + 20, Valve[Numero].Y - 10, Valve[Numero].X, Valve[Numero].Y, false);
        Ligne(Valve[Numero].X - 20, Valve[Numero].Y, Valve[Numero].X - 30, Valve[Numero].Y);
        Ligne(Valve[Numero].X + 20, Valve[Numero].Y, Valve[Numero].X + 30, Valve[Numero].Y);
      } else {
        Triangle2(Valve[Numero].X - 20, Valve[Numero].Y + 10, Valve[Numero].X - 20, Valve[Numero].Y - 10, Valve[Numero].X, Valve[Numero].Y, true);
        Triangle2(Valve[Numero].X + 20, Valve[Numero].Y + 10, Valve[Numero].X + 20, Valve[Numero].Y - 10, Valve[Numero].X, Valve[Numero].Y, true);
        Ligne(Valve[Numero].X - 20, Valve[Numero].Y, Valve[Numero].X - 30, Valve[Numero].Y);
        Ligne(Valve[Numero].X + 20, Valve[Numero].Y, Valve[Numero].X + 30, Valve[Numero].Y);
      }
      break;
    case 'Check_valve':
      if (Valve[Numero].Etat == 1) {
        Ligne(Valve[Numero].X - 7, Valve[Numero].Y, Valve[Numero].X, Valve[Numero].Y - 8);
        Ligne(Valve[Numero].X - 7, Valve[Numero].Y, Valve[Numero].X, Valve[Numero].Y + 8);
        Cercle(Valve[Numero].X, Valve[Numero].Y, 5);
        Ligne(Valve[Numero].X - 7, Valve[Numero].Y, Valve[Numero].X - 15, Valve[Numero].Y);
        Ligne(Valve[Numero].X + 5, Valve[Numero].Y, Valve[Numero].X + 15, Valve[Numero].Y);
      } else {
        Ligne(Valve[Numero].X - 7, Valve[Numero].Y, Valve[Numero].X, Valve[Numero].Y - 8);
        Ligne(Valve[Numero].X - 7, Valve[Numero].Y, Valve[Numero].X, Valve[Numero].Y + 8);
        Cercle(Valve[Numero].X + 5, Valve[Numero].Y, 5);
        Ligne(Valve[Numero].X - 7, Valve[Numero].Y, Valve[Numero].X - 15, Valve[Numero].Y);
        Ligne(Valve[Numero].X + 10, Valve[Numero].Y, Valve[Numero].X + 15, Valve[Numero].Y);
      }
      break;
  }
  if (C == '#FFFFFF') { Coul = '#FFFFFF' } else { Coul = '#FF00FF' }
  if (!Blanc) { Couleur(Coul) } else { Couleur('#000000') }



  Couleur(C);


  Couleur('#000000');

}

//Создать манометр
function Cree_Manometr(Xe, Ye) {  //
  Nb_Manometr++;
  NewManometr(Nb_Manometr);
  Manometr[Nb_Manometr].X = Xe;
  Manometr[Nb_Manometr].Y = Ye;
  Manometr[Nb_Manometr].View = 2;
}

//Отобразить манометр
function Affiche_Manometr(Numero, C, Blanc) {  //

  if (!Blanc) { Couleur(C) } else { Couleur('#000000') }
  
  if (Manometr[Numero].View == 2) {
    Ligne(Manometr[Numero].X, Manometr[Numero].Y, Manometr[Numero].X, Manometr[Numero].Y-20);
    Cercle(Manometr[Numero].X, Manometr[Numero].Y-40, 20)
    Ligne(Manometr[Numero].X+15, Manometr[Numero].Y-25, Manometr[Numero].X-15, Manometr[Numero].Y-55);
    Ligne(Manometr[Numero].X-15, Manometr[Numero].Y-55, Manometr[Numero].X-5, Manometr[Numero].Y-50);
    Ligne(Manometr[Numero].X-15, Manometr[Numero].Y-55, Manometr[Numero].X-10, Manometr[Numero].Y-45);
    } else {
    Ligne(Manometr[Numero].X, Manometr[Numero].Y, Manometr[Numero].X, Manometr[Numero].Y-20);
    Cercle(Manometr[Numero].X, Manometr[Numero].Y-40, 20)
    ctx.textAlign = 'center';
    ctx.font = (Math.round(10 * Facteur) + 4) + 'px Arial';
    Otxy(Manometr[Numero].X, Manometr[Numero].Y-35, Manometr[Numero].Pressure)
  }

  Couleur('#000000');
}














console.log("Окончание программы");