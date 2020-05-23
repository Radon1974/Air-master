var canvas = document.getElementById("myCanvas"),
  ctx = canvas.getContext("2d"),
  w = canvas.width,
  h = canvas.height;

  document.oncontextmenu = function (){return false};  //Запретить выпадающее меню в браузере





const Button1 = document.getElementById('Button1'),

  Button4 = document.getElementById('Button4'),
  Button5 = document.getElementById('Button5'),
  Button6 = document.getElementById('Button6'),
  Button7 = document.getElementById('Button7'),
  Button8 = document.getElementById('Button8'),
  Button9 = document.getElementById('Button9'),
  Button10 = document.getElementById('Button10'),
  //Button11 = document.getElementById('Button11'),
  Button12 = document.getElementById('Button12'),
  Button13 = document.getElementById('Button13'),
  Button14 = document.getElementById('Button14'),
  Button15 = document.getElementById('Button15'),
  Button16 = document.getElementById('Button16'),
  Button17 = document.getElementById('Button17'),
  Button18 = document.getElementById('Button18'),
  Button19 = document.getElementById('Button19'),
  Button20 = document.getElementById('Button20');


//Часы
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();




//Текущие координаты мыши
var mouse = { x: 0, y: 0 };
var ActionMouse = ''



//Получение событий мыши
/*if (canvas.addEventListener) {
  canvas.addEventListener('click', funcEventMoveCanvas.bind(null));
}else if (canvas.attachEvent) { // IE DOM
  canvas.attachEvent('onclick', funcEventMoveCanvas.bind(null));
}*/

FormCreate();


//Обработчик событий мыши

Button1.addEventListener('click', function (e) {    //Создать новый файл
  Nouveau1Click();
});

Button4.addEventListener('click', function (e) {    //Создать новый компонент
  Composant1Click()
});
Button5.addEventListener('click', function (e) {    //Создать текст
  Texte1Click()
});
Button6.addEventListener('click', function (e) {    //Удалить компонент
  Efface1Click()
});
Button7.addEventListener('click', function (e) {    //Переместить компонент
  Dplacer1Click();
});
Button8.addEventListener('click', function (e) {    //Добавить силовую цепь
  Puissance1Click();
});
Button9.addEventListener('click', function (e) {    //Добавить цепь управления
  Commande1Click();
});
Button10.addEventListener('click', function (e) {   //Пошаговое выполнение
  Anime1Click();
});
Button11.addEventListener('click', function (e) {   //Непрерывное выполнение
  Continu1Click();
});
Button12.addEventListener('click', function (e) {   //Изменить состояние компонента
  RAZ1Click();
});
Button13.addEventListener('click', function (e) {   //Увеличить
  Loupe1Click();
});
Button14.addEventListener('click', function (e) {   //Уменьшить
  Loupe2Click();
});
Button15.addEventListener('click', function (e) {   //Влево
  Gauche1Click();
});
Button16.addEventListener('click', function (e) {   //Вправо
  Droite1Click();
});
Button17.addEventListener('click', function (e) {   //Вверх
  Dessus1Click();
});
Button18.addEventListener('click', function (e) {   //Вниз
  Dessous1Click();
});
Button19.addEventListener('click', function (e) {   //Возврат
  Sortir1Click();
});
Button20.addEventListener('click', function (e) {   //О программе
  Apropos1Click();
});



canvas.addEventListener('mousedown', function (f) {
  X_s = f.pageX - this.offsetLeft;
  Y_s = f.pageY - this.offsetTop;
  //X_s = mouse.x * Facteur;
  //Y_s = mouse.y * Facteur;
  //X_s = mouse.x;
  //Y_s = mouse.y;

  //++++++++++++++++++++++++++++++++++++++
  if ((event.which == 1) && Fichiermodifie) {
    Gauche = true;
    Droite = false;
    Mouse1Click()
  }
  if (event.which == 3) {
    Droite = true;
    Gauche = false;
    PetitMenu('#000000', '<Симулятор> Готов!');
  }
}
);

//Обработка событий мыши
function Mouse1Click() {


  switch (ActionMouse) {
    case 'File':
      alert('Файл');
      funcCursor("default");
      break;

    //++++++++++++++++++++++++++++++++++++++
    case 'Pointe_Objet2':

      Pointe_Objet2(Objet2, Prox2);                             //Выбор компонента
      Ajoute_Objet2(Objet2, Celui_La2);                         //
      Ou_Que();                    //Выбор места установки компонента
      ActionMouse = 'Ajoute_Objet3';
      break;
    case 'Ajoute_Objet3':

      Ajoute_Objet3(Objet2, X_s / Facteur, Y_s / Facteur, Quoi_Donc2, Celui_La2);//Вставка компонента
      PetitMenu('#000000', '<Симулятор> Готов!');
      Redess(false);                                            //Перерисовка холста
      funcCursor("default");
      ClearObjet();
      ActionMouse = '';
      Fichiermodifie = false;
      break;

    //++++++++++++++++++++++++++++++++++++++
    case 'Texte':

      Cree_Texte2()
      funcCursor("default");
      PetitMenu('#000000', '<Симулятор> Готов!');
      ActionMouse = '';
      Fichiermodifie = false;
      break;

    //++++++++++++++++++++++++++++++++++++++
    case 'Remove':

      Celui_La2 = 1;
      Pointe_Objet2(Objet2, Prox2); //Выбор компонента
      Effacer()  //

      //Ajoute_Objet2(Objet2, Celui_La2); //
      //Ou_Que(Lax2, Lay2, false, Quoi_Donc2); //Выбор места установки компонента
      PetitMenu('#000000', '<Симулятор> Готов!');
      ActionMouse = '';
      break;

    //++++++++++++++++++++++++++++++++++++++  
    case 'Move':

      Pointe_Objet2(Objet2, Prox2); //Выбор компонента
      Ou_Que(); //Выбор места установки компонента
      PetitMenu('#A6CAF0', '<Переместить>  Укажите новую позицию ?');
      ActionMouse = 'Move2';
      break;

    case 'Move2':
      Deplace_Objet()
      funcCursor("default");
      PetitMenu('#000000', '<Симулятор> Готов!');
      ActionMouse = '';
      Fichiermodifie = false;
      break;
    //++++++++++++++++++++++++++++++++++++++
    case 'DRA':

      DRA(X_s, Y_s);              //Ввод точки канала
      Entre_Canal();                      //Ввод канала
      if (Ext) {
        Cree_Canal();                       //Запись канала после введения данных
        Redess(false);                      //Перерисовка холста                      
        funcCursor("default");
        PetitMenu('#000000', '<Симулятор> Готов!');
        ActionMouse = '';
        Fichiermodifie = false;
      }
      break;

    //++++++++++++++++++++++++++++++++++++++        
    case 'DRA2':

      DRA(X_s, Y_s);              //Ввод точки канала
      Entre_Canal_Pilote();                      //Ввод канала
      if (Ext) {
        Cree_Canal_Pilote();                       //Запись канала после введения данных
        Redess(false);                      //Перерисовка холста                      
        funcCursor("default");
        PetitMenu('#000000', '<Симулятор> Готов!');
        ActionMouse = '';
        Fichiermodifie = false;
      }
      break;
    case 'RAZ1':        //Выбор положения при нажатии

      RAZ1Click2();
      funcCursor("default");
      PetitMenu('#000000', '<Симулятор> Готов!');
      ActionMouse = '';
      Fichiermodifie = false;
      break;

    //++++++++++++++++++++++++++++++++++++++  
    case 'Anime':        //Выбор положения при нажатии
      Pasapas = true;
      Anime1();
      Redess(false);
      PetitMenu('#00FF00', '<Выполнить>   Нажмите или удерживайте часы, чтобы пошло время' + ' Левая кнопка: Действие    Правая кнопка: Назад ');
      L_Action = 'Action';
      Pointe_Objet(L_Action, '#0000FF'); //Выбор компонента

      //ActionMouse = 'Anime1';

      if (Objet2 != 'Rien' || ActionMouse != 'Exit') {   //Если нажата клавиша "Возврат" - то выход
        ActionMouse = 'Anime1'
      } else {
        PetitMenu('#000000', '<Симулятор> Готов!');
        ActionMouse = '';
        Fichiermodifie = false;
      }

      break;

    //++++++++++++++++++++++++++++++++++++++  
    case 'Anime1':        //Выбор положения при нажатии
      
        Heure = true;
        Pointe_Objet2(Objet2, Prox2); //Выбор компонента
        Anime2();
        
      
      Redess(false);
      
      ActionMouse = 'Anime'; 
      
      if (['Un_D', 'Un_Cap'].includes(Objet2)) {

        Pasapas = true;
        //Anime1();
  
        PetitMenu('#00FF00', '<Выполнить>   Нажмите или удерживайте часы, чтобы пошло время' + ' Левая кнопка: Действие    Правая кнопка: Назад ');
        L_Action = 'Action';
        Pointe_Objet(L_Action, '#0000FF'); //Выбор компонента

        
        ActionMouse = 'Anime1'
      }
      funcCursor("default");
      break;

    //++++++++++++++++++++++++++++++++++++++  
    case 'Anime2':        //Выбор положения при нажатии

      var intervalID = setInterval(function () {  //Непрерывный цикл
        Heure = true;
        Pointe_Objet2(Objet2, Prox2); //Выбор компонента
        Anime2();
        Redess(false);
        timerId++
        if (Objet2 == 'Rien') {
          clearInterval(intervalID)
          funcCursor("default");
          PetitMenu('#000000', '<Симулятор> Готов!');
          ActionMouse = '';
          Fichiermodifie = false;
        } //Если нажата клавиша "Возврат" - то выход из цикла
      }, 1000);

      break;

  }

}








//Константы
var Max_Distributeur = 35;
var Max_Verin = 30;
var Max_Commande = 70;
var Max_Canal = 100;
var Max_Canal_Pilote = 200;
var Max_Alimentation = 50;
var Max_Capteur = 60;
var Max_Alim_Pilote = 50;
var Max_Carrefour = 50;
var Max_Carrefour_Pilote = 50;
var Max_Memoire = 20;
var Max_Sequenceur = 5;
var Max_Valve = 30;
var Max_Manometr = 30;
var Max_Exhaust = 30;
var Max_Texte = 80;
var Coef = 1.2;
var VHauteur = 35 * Coef;//Высота элемента
var VLargeur = 130 * Coef;//Ширина элемента
var VH_Tige = 4 * Coef;//Высота штока
var VL_Tige = 130 * Coef;//Ширина штока
var VH_Bout = 6 * Coef;//Высота окончания
var VCanal = 8 * Coef;
var VAmor = 10 * Coef;
var DLargeur = 30 * Coef;
var A_Droite = true;
var L_Bout = VLargeur / 10;
var ARayon = 5;
var CLargeur = 20 * Coef;
var Dmemoire = 24 * Coef;
var SLargeur = 36 * Coef;
var Maxtige = 9;
var Mintige = 2;
var Cote = 2.6 * Coef;
var Un = 1;
var Zero = 0;
var Bof = 2;
var Bouche = 3;
var MobDist = 20;

//Массивы
var Distributeur = [];
var Sequenceur = [];
var Pointe = [];
var Verin = [];
var Commande = [];
var Canal = [];
var Canal_Pilote = [];
var AliMentation = [];
var Alim_Pilote = [];
var Capteur = [];
var Carrefour = [];
var Carrefour_Pilote = [];
var Memoire = [];
var Valve = [];
var Manometr = [];
var Exhaust = [];
var Texte = [];
var T_Parcours = [];
var Les_points = [];


//Сложные типы переменных
var Str16 = ''; //Можно убрать

//Переменные
var Nb_Verin = 0, Nb_Distributeur = 0, Nb_Commande = 0, Nb_Canal = 0, Nb_Alimentation = 0, Nb_Capteur = 0;
var Nb_Alim_Pilote = 0, Nb_Canal_Pilote = 0, Nb_Carrefour = 0, Nb_Carrefour_Pilote = 0, Nb_Memoire = 0;
var Nb_Sequenceur = 0, Nb_Valve = 0, Nb_Manometr = 0, Nb_Exhaust = 0, Nb_Texte = 0; 
var G_Pour = 0, G_K = 0, X_s = 0, Y_s = 0, Nb_Point = 0;
var Vieux_Nb_Verin = 0, Vieux_Nb_Distributeur = 0, Vieux_Nb_Capteur = 0, Vieux_Nb_Alim = 0;
var Vieux_Nb_Alim_Pilote = 0, Vieux_Nb_Carrefour = 0, Vieux_Nb_Carrefour_Pilote = 0, Vieux_Nb_Commande = 0;
var Vieux_Nb_Canal = 0, Vieux_Nb_Canal_Pilote = 0, Vieux_Nb_Memoire = 0, Vieux_Nb_Sequenceur = 0, Vieux_Nb_Valve = 0; 
var Vieux_Nb_Manometr = 0, Vieux_Nb_Exhaust = 0, Vieux_Nb_Texte = 0;
var Heur = 0, Minute = 0, Seconde = 0, Sec100 = 0;

var Gauche = true, Droite = true, SVG = true, Immonde_rustine_double_v = true, Immonde_rustine_galet_v = true;
var Actionencours = true, Fichiermodifie = true, Pasapas = true;
var Dialogvaleur = 0;
var Compteursouris = 0;
//var      MetaFile:TMetaFile;
var Facteur = 1, Vieux_Facteur = 0, XG = 0, YG = 0;
var Textenter = '', Heure = false, Prox2 = 0, Objet2 = '', Celui_La2 = 0, Quoi_Donc2 = '', Lax2 = 0, Lay2 = 0;
var Puissance = true, Ext = true, Debut = true, XL = 0, YL = 0, Old_XL = 0, Old_YL = 0, XFin = 0, YFin = 0;
var Pointe_Quoi = '', timerId = 0;
//Distributeur.append()


function NewDistributeur(i) {
  
  Distributeur[i] = {
    X: 0,       //Координата X гидрораспределителя
    Y: 0,       //Координата Y гидрораспределителя
    Etat_Ext: [],
    ExtX: [],   //Координата X точки присоединения к распределителю 
    ExtY: [],   //Координата Y точки присоединения к распределителю 
    Com: [{
      Quoi: '',
      Laquelle: 0
    }, {
      Quoi: '',   //Тип концов распределителя
      Laquelle: 0
    }, {
      Quoi: '',   //Тип концов распределителя
      Laquelle: 0
    }],
    Modele: '',   ////Модель распределителя
    Etat: 0   //Положение распределителя 1 или 2
  }
  
}

function NewSequenceur(i) {
  
  Sequenceur[i] = {
    X: 0,
    Y: 0,
    Etat_Ext: [],
    ExtX: [],
    ExtY: [],
    Modele: '',
    Etat: 0,
    Combien: 0
  }
  
}

function NewVerin(i) {
  
  Verin[i] = {
    X: 0,
    Y: 0,
    Tige: 0,
    Etat_Ext: [],
    EntreeX: [],
    EntreeY: [],
    Modele: ''
  }
  
}

function NewCommande(i) {
  
  Commande[i] = {
    X: 0,
    Y: 0,
    Etat: 0,
    Modele: ''
  }
  
}

function NewCanal(i) {
  
  Canal[i] = {
    X: 0,
    Y: 0,
    NbPoint: 0,
    ParcoursX: [],
    ParcoursY: [],
    Etat: 0,
    Pressure: 0, //Давление в линии
    Bout: [{
      Quoi: '',
      Lequel: 0,
      Branchement: 0
    }, {
      Quoi: '',
      Lequel: 0,
      Branchement: 0
    }, {
      Quoi: '',
      Lequel: 0,
      Branchement: 0
    }]
  }
  
}

function NewCanal_Pilote(i) {
  
  Canal_Pilote[i] = {
    X: 0,
    Y: 0,
    NbPoint: 0,
    ParcoursX: [],
    ParcoursY: [],
    Etat: 0,
    Bout: [{
      Quoi: '',
      Lequel: 0,
      Branchement: 0
    }, {
      Quoi: '',
      Lequel: 0,
      Branchement: 0
    }, {
      Quoi: '',
      Lequel: 0,
      Branchement: 0
    }]
  }
  
}

function NewAliMentation(i) {
  
  AliMentation[i] = {
    X: 0,
    Y: 0,
    Pressure: 0 //Давление в линии
  }
  
}

function NewAlim_Pilote(i) {
  
  Alim_Pilote[i] = {
    X: 0,
    Y: 0
  }
  
}

function NewCapteur(i) {
  
  Capteur[i] = {
    X: 0,
    Y: 0,
    Etat_Ext: [],
    ExtX: [],
    ExtY: [],
    Modele: '',
    Etat: 0,
    Lie_a: 0,
    Position: 0
  }
  
}

function NewCarrefour(i) {
  
  Carrefour[i] = {
    X: 0,
    Y: 0,
    Etat: 0
  }
  
}

function NewCarrefour_Pilote(i) {
  
  Carrefour_Pilote[i] = {
    X: 0,
    Y: 0,
    Etat: 0
  }
  
}

function NewMemoire(i) {
  
  Memoire[i] = {
    X: 0,
    Y: 0,
    Etat_Ext: [],
    ExtX: [],
    ExtY: [],
    Etat: 0
  }
  
}

function NewValve(i) {
  
    Valve[i] = {
      X: 0,           //Координата X запорной арматуры
      Y: 0,           //Координата Y запорной арматуры
      Etat_Ext: [],   //Количество точек подключения
      Etat: 0,       //Состояние запорной арматуры 1 - открыта, 2 - закрыта
      EntreeX: [],    //Координата X точки подключения
      EntreeY: [],    //Координата Y точки подключения
      Modele: ''      //Тип запорной арматуры
  }
  
}

function NewManometr(i) {
  
  Manometr[i] = {
    X: 0,           //Координата X манометра
    Y: 0,           //Координата Y манометра
    Etat: 0,        //Состояние манометра 1 - есть давление, 0 - нет давления
    Pressure: 0,    //Давление в линии
    View: 0         //Отображение цифр на манометре 1 - отображаются, 2 - не отображаются
  }

}

function NewExhaust(i) {
  
  Exhaust[i] = {
    X: 0,           //Координата X выхлопа
    Y: 0,           //Координата Y выхлопа
    Etat: 0,        //Состояние выхлопа 1 - соединен с источником давления , 0 - не соединен с источником давления
  }

}

function NewTexte(i) {
  
  Texte[i] = {
    X: 0,
    Y: 0,
    Lataille: 0,
    Le_Texte: ''
  }
  
}


for (let i = 1; i <= 200; i++) {
  Les_points[i] = new Array(2);
}


var Branche2 = {
  Quoi: '',
  Lequel: 0,
  Branchement: 0
}



//Примеры
//X=120;
//Y=100;
//Кран закрытый
//Triangle2(X-20, Y+10, X-20, Y-10, X, Y, true);
//Triangle2(X+20, Y+10, X+20, Y-10, X, Y, true);
//Ligne(X-20, Y, X-30, Y);
//Ligne(X+20, Y, X+30, Y);

//X=50;
//Y=100;
//Кран открытый
//Triangle2(X-20, Y+10, X-20, Y-10, X, Y, false);
//Triangle2(X+20, Y+10, X+20, Y-10, X, Y, false);
//Ligne(X-20, Y, X-30, Y);
//Ligne(X+20, Y, X+30, Y);

//X=200;
//Y=100;
//Обратный клапан закрытый
//Ligne(X-7, Y, X, Y-8);
//Ligne(X-7, Y, X, Y+8);
//Cercle(X, Y, 5);
//Ligne(X-7, Y, X-15, Y);
//Ligne(X+5, Y, X+15, Y);

//X=250;
//Y=100;
//Обратный клапан открытый
//Ligne(X-7, Y, X, Y-8);
//Ligne(X-7, Y, X, Y+8);
//Cercle(X+5, Y, 5);
//Ligne(X-7, Y, X-15, Y);
//Ligne(X+10, Y, X+15, Y);

//X=350;
//Y=100;
//Манометр
//Ligne(X, Y, X, Y-20);
//Cercle(X, Y-40, 20)
//Ligne(X+15, Y-25, X-15, Y-55);
//Ligne(X-15, Y-55, X-5, Y-50);
//Ligne(X-15, Y-55, X-10, Y-45);
//ctx.textAlign = 'center';
//ctx.font = (Math.round(10 * Facteur) + 4) + 'px Arial';
//Otxy(X, Y-35, "0.00")

//X=350;
//Y=200;
//Выхлоп
//Ligne(X, Y, X, Y-20);
//Triangle2(X+10, Y-20, X-10, Y-20, X, Y-35, false)