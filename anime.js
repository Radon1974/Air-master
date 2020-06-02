
function RAZ1Click2() {  //Функция изменить положение
    var Pour = 0;
    //var Objet = '';
    //Objet2 = 'Toutsaufcanal';
    Pointe_Objet2(Objet2, Prox2);
    Pour = Celui_La2;
    switch (Objet2) {
        case 'Rien':
        case 'Ouste':
            Redess(false);
            //Cestfini();
            return false;

        case 'Un_V':
            Verin[Pour].Tige = Max((Verin[Pour].Tige + 1) % 10, 2);
            break;
        case 'Un_D':

            switch (Distributeur[Pour].Modele) {
                case '_3_2':
                case '_4_2':
                case '_5_2':
                case '_2_2':
                case '_2_2_':
                    Distributeur[Pour].Etat = Max((Distributeur[Pour].Etat + 1) % 3, 1);
                    break;
                case '_4_3':
                case '_5_3':
                    Distributeur[Pour].Etat = Max((Distributeur[Pour].Etat + 1) % 4, 1);
                    break;
            }
            break;
        case 'Un_Cap':
            if (!(['Et', 'Ou', 'Inhibition'].includes(Capteur[Pour].Modele))) { Capteur[Pour].Etat = Max((Capteur[Pour].Etat + 1) % 3, 1) }
            break;
        case 'Une_Memoire':
            Memoire[Pour].Etat = Max((Memoire[Pour].Etat + 1) % 3, 1);
            break;
        case 'Un_Sequenceur':
            Sequenceur[Pour].Etat = (Sequenceur[Pour].Etat + 1) % (Sequenceur[Pour].Combien + 1);
            break;
        case 'Un_Valve':
            if (Valve[Pour].Modele == 'Shutoff_valve') { Valve[Pour].Etat = Max((Valve[Pour].Etat + 1) % 3, 1) };
            break;
    }
    Redess(false);
}

function Max(a, b) {
    if (a > b) { Max2 = a } else { Max2 = b }
    return Max2
}

function Min(a, b) {
    if (a < b) { Min2 = a } else { Min2 = b }
    return Min2
}









//Анимация
function Anime1() {  // Выполнение анимации компонентов
    var Pour = 0;
    var Pour2 = 0;
    var Pour3 = 0;
    var Celui_La = 0;
    var Fois = 0;
    var Encours = 0;
    var Le_Type = '';
    var En_Un = false;
    var En_Deux = false;
    var L_Action = '';
    var Tempo = 0;

    //Управление часами
    //Affiche_Temps(20, 30, true);
    //while (true) {


    for (let Pour = 1; Pour <= Nb_Distributeur; Pour++) {
        if (!(['_4_3', '_5_3'].includes(Distributeur[Pour].Modele))) {
            if ((Distributeur[Pour].Com[2].Quoi == 'Ressort_Droit') && (Distributeur[Pour].Com[1].Quoi == 'Poussoir_Gauche')) { Place_Distributeur_a(Pour, 1) }
        }
    }
    //PetitMenu('#00FF00', '<Выполнить>   Нажмите или удерживайте часы, чтобы пошло время' + ' Левая кнопка: Действие    Правая кнопка: Назад ');

    for (let Pour = 1; Pour <= Nb_Distributeur; Pour++) {
        if (Distributeur[Pour].Com[2].Quoi == 'Ressort_Droit') {
            if (Distributeur[Pour].Com[1].Quoi != 'Pilote_Gauche') { Place_Distributeur_a(Pour, 1) }
        }
    }

    for (let Pour = 1; Pour <= Nb_Capteur; Pour++) {

        if (['A_Poussoir'].includes(Capteur[Pour].Modele)) { Place_Capteur_a(Pour, 1) }
        if (['A_Galet', 'A_Galet_V'].includes(Capteur[Pour].Modele)) {
            Place_Capteur_a(Pour, 1);
            for (let Pour3 = 1; Pour3 <= Nb_Verin; Pour3++) {
                if (!(Verin[Pour3].Modele == 'Double_V')) {
                    if ((Math.round(Math.abs(((Verin[Pour3].X + (Verin[Pour3].Tige - 1) * L_Bout + VL_Tige + 2 * L_Bout) - Capteur[Pour].X))) < 11) && ((Verin[Pour3].Y - Capteur[Pour].Y) < 0) && (Math.abs(Verin[Pour3].Y - Capteur[Pour].Y) < 40)) { Place_Capteur_a(Pour, 2) }
                } else {
                    if ((Math.round(Math.abs(((Verin[Pour3].Y - (Verin[Pour3].Tige - 1) * L_Bout - VL_Tige - 2 * L_Bout) - Capteur[Pour].Y))) < 11) && ((Verin[Pour3].X - Capteur[Pour].X) < 0) && (Math.abs(Verin[Pour3].X - Capteur[Pour].X) < 40)) { Place_Capteur_a(Pour, 2) }
                }
            }
        }
    }
}



//Анимация
function Anime2() {  // Выполнение анимации компонентов
    var Pour = 0;
    var Pour2 = 0;
    var Pour3 = 0;
    var Celui_La = 0;
    var Fois = 0;
    var Encours = 0;
    var Le_Type = '';
    var En_Un = false;
    var En_Deux = false;
    var L_Action = '';
    var Tempo = 0;

    L_Action = Objet2;
    Celui_La = Celui_La2;

    if (['Un_D', 'Un_Cap', 'Un_Valve'].includes(L_Action)) {

        //L_Action = 'Action';


        Heure = false;
        if (Celui_La == 0) {
            Redess(false);
            PetitMenu('#FFFFFF', 'Симулятор');
            return false;
        }
        switch (L_Action) {
            case 'Un_D':
                if ((Distributeur[Celui_La].Com[1].Quoi == 'Poussoir_Gauche') && (['Ressort_Droit', 'Scie_Droite'].includes(Distributeur[Celui_La].Com[2].Quoi))) {
                    Place_Distributeur_a(Celui_La, 3 - Distributeur[Celui_La].Etat)
                };
                break;
            case 'Un_Cap':
                Change_Etat_Capteur(Celui_La);
                break;
            case 'Un_Valve':
                if (Valve[Celui_La].Modele == 'Shutoff_valve') { Change_Etat_Valve(Celui_La) };
                break;
        }

        return;
    }
    if (RazEtap == 1) { Raz(), RazEtap = 0 };  //Очистка всех значений давления
    Raz_Alim();  //Очистка значений присоединения к источнику силового давления

    for (let Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) { for (Pour2 = 1; Pour2 <= 2; Pour2++) { if (Canal_Pilote[Pour].Bout[Pour2].Quoi == 'Une_Alim_Pilote') { Canal_Pilote[Pour].Etat = Un } } }
    //for (let Pour = 1; Pour <= Nb_Canal; Pour++) { Canal[Pour].Etat = Zero }

    //*********************** Линия управления ************************
    for (let Fois = 1; Fois <= 16; Fois++) {
        //Присвоение пересечениям значения работающего канала
        for (let Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) {
            if (Canal_Pilote[Pour].Etat != Bof) {
                for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                    if (Canal_Pilote[Pour].Bout[Pour2].Quoi == 'Un_Carrefour_Pilote') {
                        Carrefour_Pilote[Canal_Pilote[Pour].Bout[Pour2].Lequel].Etat = Canal_Pilote[Pour].Etat
                    }
                }
            }
        }
        //Присвоение датчикам значения работающего канала
        for (let Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) {
            if (Canal_Pilote[Pour].Etat != Bof) {
                for (Pour2 = 1; Pour2 <= 2; Pour2++) {
                    if (Canal_Pilote[Pour].Bout[Pour2].Quoi == 'Un_Cap') {
                        if ([1, 2].includes(Canal_Pilote[Pour].Bout[Pour2].Branchement)) {
                            Capteur[Canal_Pilote[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal_Pilote[Pour].Bout[Pour2].Branchement] = Canal_Pilote[Pour].Etat
                        }
                    }
                }
            }
        }

        for (let Pour = 1; Pour <= Nb_Capteur; Pour++) {
            switch (Capteur[Pour].Modele) {
                case 'Ou':
                    if ((Capteur[Pour].Etat_Ext[1] == 1) || (Capteur[Pour].Etat_Ext[2] == 1)) { Capteur[Pour].Etat_Ext[3] = 1 }
                    else {
                        if ((Capteur[Pour].Etat_Ext[1] != Bof) && (Capteur[Pour].Etat_Ext[2] != Bof)) { Capteur[Pour].Etat_Ext[3] = 0 }
                    };
                    break;
                case 'Et':
                    if ((Capteur[Pour].Etat_Ext[1] != Bof) && (Capteur[Pour].Etat_Ext[2] != Bof)) {
                        if ((Capteur[Pour].Etat_Ext[1] == 1) && (Capteur[Pour].Etat_Ext[2] == 1)) {
                            Capteur[Pour].Etat_Ext[3] = 1
                        }
                        else { Capteur[Pour].Etat_Ext[3] = 0 }
                    };
                    break;
                case 'Inhibition':
                    if ((Capteur[Pour].Etat_Ext[1] == 1) && (Capteur[Pour].Etat_Ext[2] == 0)) { Capteur[Pour].Etat_Ext[3] = 1 }
                    else {
                        if ((Capteur[Pour].Etat_Ext[1] != Bof) && (Capteur[Pour].Etat_Ext[2] != Bof)) { Capteur[Pour].Etat_Ext[3] = 0 }
                    }
                    break;
                default:
                    switch (Capteur[Pour].Etat) {
                        case 1:
                            if ([0, 1].includes(Capteur[Pour].Etat_Ext[2])) { Capteur[Pour].Etat_Ext[3] = 0 };
                            break;
                        case 2:
                            Capteur[Pour].Etat_Ext[3] = Capteur[Pour].Etat_Ext[2];
                            break;
                    }
            }
        }

        for (let Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) {
            for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                if (Canal_Pilote[Pour].Bout[Pour2].Quoi == 'Un_Cap') {
                    if (Canal_Pilote[Pour].Bout[Pour2].Branchement == 3) {
                        if (Capteur[Canal_Pilote[Pour].Bout[Pour2].Lequel].Etat_Ext[3] != Bof) {
                            Canal_Pilote[Pour].Etat = Capteur[Canal_Pilote[Pour].Bout[Pour2].Lequel].Etat_Ext[3]
                        }
                    }
                }
            }

            for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                if (Canal_Pilote[Pour].Bout[Pour2].Quoi == 'Un_Carrefour_Pilote') {
                    if (Carrefour_Pilote[Canal_Pilote[Pour].Bout[Pour2].Lequel].Etat == 1) {
                        Canal_Pilote[Pour].Etat = 1
                    }
                }
            }
        }
        //Присвоение памяти значений работающих каналов (1-работа, 0-стоп)
        for (Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) {
            if (Canal_Pilote[Pour].Etat == 1) {
                for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                    if (Canal_Pilote[Pour].Bout[Pour2].Quoi == 'Une_Memoire') {
                        if (Canal_Pilote[Pour].Bout[Pour2].Branchement != 3) {
                            Memoire[Canal_Pilote[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal_Pilote[Pour].Bout[Pour2].Branchement] = 1
                        }
                    }
                }
                //Присвоение секвенсеру значений работающих каналов (1-работа, 0-стоп)
                for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                    if (Canal_Pilote[Pour].Bout[Pour2].Quoi == 'Un_Sequenceur') {
                        Sequenceur[Canal_Pilote[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal_Pilote[Pour].Bout[Pour2].Branchement] = 1
                    }
                }
            }
        }
        //Присвоение состояния памяти работа или стоп и вывод на экран (2-работа, 1-стоп)
        for (let Pour = 1; Pour <= Nb_Memoire; Pour++) {
            if ((Memoire[Pour].Etat_Ext[1] == 1) && (Memoire[Pour].Etat_Ext[2] != 1)) { Memoire[Pour].Etat = 2 }
            if ((Memoire[Pour].Etat_Ext[1] != 1) && (Memoire[Pour].Etat_Ext[2] == 1)) { Memoire[Pour].Etat = 1 }
            Affiche_Memoire(Pour, 15, false);
        }
        //Присвоение каналу вывода памяти (3) состояния (1-работа, 0-стоп)
        for (let Pour = 1; Pour <= Nb_Memoire; Pour++) {
            if (Memoire[Pour].Etat == 1) { Memoire[Pour].Etat_Ext[3] = 0 }
            else {
                if (Memoire[Pour].Etat_Ext[4] == 1) { Memoire[Pour].Etat_Ext[3] = 1 }
                else { Memoire[Pour].Etat_Ext[3] = 0 }
            }
        }

        for (let Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) {
            if (Canal_Pilote[Pour].Etat != 1) {
                //Присвоение каналу управления состояния работа, после выхода его из памяти (если у него нет работы)                   
                for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                    if (Canal_Pilote[Pour].Bout[Pour2].Quoi == 'Une_Memoire') {
                        if (Canal_Pilote[Pour].Bout[Pour2].Branchement == 3) { Canal_Pilote[Pour].Etat = Memoire[Canal_Pilote[Pour].Bout[Pour2].Lequel].Etat_Ext[3] }
                    }
                }
                //Присвоение каналу управления состояния работа, после выхода его из секвенсора (если у него нет работы) иначе стоп
                for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                    if (Canal_Pilote[Pour].Bout[Pour2].Quoi == 'Un_Sequenceur') {
                        if (Sequenceur[Canal_Pilote[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal_Pilote[Pour].Bout[Pour2].Branchement] == 1) { Canal_Pilote[Pour].Etat = 1 }
                        else {
                            if ([9, 10, 11, 12, 13, 14, 15, 16, 21, 22].includes(Canal_Pilote[Pour].Bout[Pour2].Branchement)) {
                                if (Sequenceur[Canal_Pilote[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal_Pilote[Pour].Bout[Pour2].Branchement] == 0) { Canal_Pilote[Pour].Etat = 0 }
                            }
                        }
                    }
                }
            }
        }
        //Работа секвенсора
        for (let Pour = 1; Pour <= Nb_Sequenceur; Pour++) {
            if (Sequenceur[Pour].Etat_Ext[18] == 1) { Sequenceur[Pour].Etat = 0 };
            if ((Sequenceur[Pour].Etat != 0) && (Sequenceur[Pour].Etat_Ext[19] == 1)) { Sequenceur[Pour].Etat_Ext[Sequenceur[Pour].Etat + 8] = 1 };
            if ((Sequenceur[Pour].Etat == Sequenceur[Pour].Combien) && (Sequenceur[Pour].Etat_Ext[Sequenceur[Pour].Etat] == 1)) { Sequenceur[Pour].Etat_Ext[22] = 1 } else { Sequenceur[Pour].Etat_Ext[22] = 0 }; //Если точка на конце секвенсера
            if (Sequenceur[Pour].Etat == 1) { Sequenceur[Pour].Etat_Ext[17] = 1 };
            if (Sequenceur[Pour].Etat != 0) {   //Если включен секвенсер то...
                if (Sequenceur[Pour].Etat != Sequenceur[Pour].Combien) {        //Если не конечная позиция то...
                    if ((Sequenceur[Pour].Etat_Ext[19] == 1) && (Sequenceur[Pour].Etat_Ext[Sequenceur[Pour].Etat] == 1)) { Sequenceur[Pour].Etat = Sequenceur[Pour].Etat % Sequenceur[Pour].Combien + 1 } //Если питание включено и на 20 подано то...
                }
                else {
                    if ((Sequenceur[Pour].Etat_Ext[20] == 1) && (Sequenceur[Pour].Etat_Ext[Sequenceur[Pour].Etat] == 1)) { Sequenceur[Pour].Etat = 1 }
                }
            }
            else {
                if (Sequenceur[Pour].Etat_Ext[20] == 1) { Sequenceur[Pour].Etat = 1 }
            }
            Affiche_Etat_Sequenceur(Pour);  //Отображение точки на секвенсере
        }
    }

    for (let Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) {
        if (Canal_Pilote[Pour].Etat == 1) {
            for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                if (Canal_Pilote[Pour].Bout[Pour2].Quoi == 'Un_D') {
                    Distributeur[Canal_Pilote[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal_Pilote[Pour].Bout[Pour2].Branchement] = 1
                }
            }
        }
    }

    for (let Pour = 1; Pour <= Nb_Distributeur; Pour++) {
        if (!(['_4_3', '_5_3'].includes(Distributeur[Pour].Modele))) {
            if (Distributeur[Pour].Etat_Ext[-1] == 1) {
                if (Distributeur[Pour].Etat_Ext[0] == 0) { Place_Distributeur_a(Pour, 2) };
            } else {
                if (((Distributeur[Pour].Com[2].Quoi == 'Ressort_Droit') && (Distributeur[Pour].Modele != '_2_2')) || (Distributeur[Pour].Etat_Ext[0] == 1)) { Place_Distributeur_a(Pour, 1) };
            }
        } else {

            if ((Distributeur[Pour].Etat_Ext[-1] == 1) && (Distributeur[Pour].Etat_Ext[0] == 0)) { Place_Distributeur_a(Pour, 2) }
            else {
                if ((Distributeur[Pour].Etat_Ext[-1] == 0) && (Distributeur[Pour].Etat_Ext[0] == 1)) { Place_Distributeur_a(Pour, 3) }
                else { if ((Distributeur[Pour].Etat_Ext[-1] == 0) && (Distributeur[Pour].Etat_Ext[0] == 0)) { Place_Distributeur_a(Pour, 1) } }
            }
        }
    }

    //*********************** Силовая линия (путь от выхлопа - Exhaust) ************************
    for (let Pour = 1; Pour <= Nb_Canal; Pour++) {
        for (Pour2 = 1; Pour2 <= 2; Pour2++) {
            if (Canal[Pour].Bout[Pour2].Quoi == 'Un_Exhaust') {
                Canal[Pour].Etat = Zero;
                Canal[Pour].Pressure = 0;

                /*for (Pour3 = 1; Pour3 <= Nb_Exhaust; Pour3++) {
                    for (Pour4 = 1; Pour4 <= Canal[Pour].NbPoint; Pour4++) {
                        if (Canal[Pour].ParcoursX[Pour4] == Exhaust[Pour3].X && Canal[Pour].ParcoursY[Pour4] == Exhaust[Pour3].Y && Exhaust[Pour3].Alim_Exhaust == Zero) {
                            Canal[Pour].Etat = Zero;
                            Canal[Pour].Pressure = Zero;
                        }
                    }
                }*/
            }
        }
    }

    for (let Fois = 1; Fois <= 4; Fois++) {
        //Присвоение входу компонента состояние стравлено от силового канала
        for (let Pour = 1; Pour <= Nb_Canal; Pour++) {
            if ([Zero].includes(Canal[Pour].Etat)) {
                for (Pour2 = 1; Pour2 <= 2; Pour2++) {
                    if (Canal[Pour].Bout[Pour2].Quoi == 'Un_Carrefour') {
                        Carrefour[Canal[Pour].Bout[Pour2].Lequel].Etat = Canal[Pour].Etat;

                    }
                }
            }
        }

        for (let Pour = 1; Pour <= Nb_Canal; Pour++) {
            if ([Zero].includes(Canal[Pour].Etat)) {
                for (Pour2 = 1; Pour2 <= 2; Pour2++) {
                    if (Canal[Pour].Bout[Pour2].Quoi == 'Un_Manometr') {
                        Manometr[Canal[Pour].Bout[Pour2].Lequel].Etat = Canal[Pour].Etat;
                        if (Manometr[Canal[Pour].Bout[Pour2].Lequel].Pressure == 0) { Manometr[Canal[Pour].Bout[Pour2].Lequel].Pressure = Canal[Pour].Pressure }
                        Manometr[Canal[Pour].Bout[Pour2].Lequel].View = 1;
                    }
                }
            }
        }

        for (let Pour = 1; Pour <= Nb_Canal; Pour++) {
            if ([Zero].includes(Canal[Pour].Etat)) {

                for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                    if (Canal[Pour].Bout[Pour2].Quoi == 'Un_D') {
                        if (Canal[Pour].Bout[Pour2].Branchement == 1) {
                            Distributeur[Canal[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal[Pour].Bout[Pour2].Branchement] = Canal[Pour].Etat
                        }
                    }
                }
                for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                    if (Canal[Pour].Bout[Pour2].Quoi == 'Un_V') {
                        Verin[Canal[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal[Pour].Bout[Pour2].Branchement] = Canal[Pour].Etat;
                    }
                }
                for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                    if (Canal[Pour].Bout[Pour2].Quoi == 'Un_Valve') {
                        Valve[Canal[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal[Pour].Bout[Pour2].Branchement] = Canal[Pour].Etat;
                        if (Valve[Canal[Pour].Bout[Pour2].Lequel].Etat == 1) {
                            if (Canal[Pour].Bout[Pour2].Branchement == 1) {
                                Valve[Canal[Pour].Bout[Pour2].Lequel].Etat_Ext[2] = Canal[Pour].Etat;
                            } else {
                                Valve[Canal[Pour].Bout[Pour2].Lequel].Etat_Ext[1] = Canal[Pour].Etat;
                            }
                        }
                        if (Valve[Canal[Pour].Bout[Pour2].Lequel].Modele == 'Check_valve') {
                            if (Valve[Canal[Pour].Bout[Pour2].Lequel].Etat_Ext[1] == 0) {
                                Valve[Canal[Pour].Bout[Pour2].Lequel].Etat = 1;
                            } else { Valve[Canal[Pour].Bout[Pour2].Lequel].Etat = 2 };
                        }
                    }
                }
            }
        }
        //Присвоение выходу компонента состояние работа от силового канала
        /*for (let Pour = 1; Pour <= Nb_Valve; Pour++) {
            if (Valve[Pour].Etat == 1 && (Valve[Pour].Etat_Ext[1] == 1 || Valve[Pour].Etat_Ext[2] == 1) || Valve[Pour].Modele == 'Check_valve') {
                if (Valve[Pour].Modele == 'Check_valve' && Valve[Pour].Etat_Ext[2] == 1) {
                    Valve[Pour].Etat_Ext[1] = 0;                                //Проверить
                }
                if (Valve[Pour].Modele == 'Check_valve' && Valve[Pour].Etat_Ext[1] == 1) {
                    Valve[Pour].Etat_Ext[1] = 1, Valve[Pour].Etat_Ext[2] = 1;   //Проверить
                }
                if (Valve[Pour].Modele == 'Shutoff_valve') {
                    Valve[Pour].Etat_Ext[1] = 1, Valve[Pour].Etat_Ext[2] = 1;   //Проверить
                }
            };
        }*/

        for (let Pour = 1; Pour <= Nb_Distributeur; Pour++) {
            if (!(['_4_3', '_5_3'].includes(Distributeur[Pour].Modele))) {
                switch (Distributeur[Pour].Etat) {
                    case 1:
                        Distributeur[Pour].Etat_Ext[3] = Distributeur[Pour].Etat_Ext[1];
                        if (Distributeur[Pour].Modele == '_2_2_') { Distributeur[Pour].Etat_Ext[4] = Distributeur[Pour].Etat_Ext[1] }
                        if (Distributeur[Pour].Modele == '_2_2') { Distributeur[Pour].Etat_Ext[4] = Bouche }
                        break;
                    case 2:
                        if (!(Distributeur[Pour].Modele == '_2_2_')) {
                            Distributeur[Pour].Etat_Ext[4] = Distributeur[Pour].Etat_Ext[1]
                        } else { Distributeur[Pour].Etat_Ext[4] = Bouche }
                        break;
                }
            } else {

                switch (Distributeur[Pour].Etat) {

                    case 1:
                        Distributeur[Pour].Etat_Ext[3] = Bouche;
                        Distributeur[Pour].Etat_Ext[4] = Bouche;
                        break;
                    case 2:
                        Distributeur[Pour].Etat_Ext[4] = Distributeur[Pour].Etat_Ext[1];
                        break;
                    case 3:
                        Distributeur[Pour].Etat_Ext[3] = Distributeur[Pour].Etat_Ext[1];
                        break;
                }
            }
        }
        //Присвоение силовому каналу состояния работа на выходе из компонента
        for (let Pour = 1; Pour <= Nb_Canal; Pour++) {
            //if (Canal[Pour].Etat == 0) {

            for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                if (Canal[Pour].Bout[Pour2].Quoi == 'Un_D') {
                    if ([Zero].includes(Distributeur[Canal[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal[Pour].Bout[Pour2].Branchement])) {
                        Canal[Pour].Etat = Distributeur[Canal[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal[Pour].Bout[Pour2].Branchement]
                    }
                }
            }

            for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                if (Canal[Pour].Bout[Pour2].Quoi == 'Un_Carrefour') {
                    if ([Zero].includes(Carrefour[Canal[Pour].Bout[Pour2].Lequel].Etat)) {
                        Canal[Pour].Etat = Carrefour[Canal[Pour].Bout[Pour2].Lequel].Etat;
                    }
                }
            }

            for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                if (Canal[Pour].Bout[Pour2].Quoi == 'Un_Manometr') {
                    if ([Zero].includes(Manometr[Canal[Pour].Bout[Pour2].Lequel].Etat)) {
                        Canal[Pour].Etat = Manometr[Canal[Pour].Bout[Pour2].Lequel].Etat;
                    }
                }
            }

            for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                if (Canal[Pour].Bout[Pour2].Quoi == 'Un_Valve') {
                    if ([Zero].includes(Valve[Canal[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal[Pour].Bout[Pour2].Branchement])) {
                        Canal[Pour].Etat = Valve[Canal[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal[Pour].Bout[Pour2].Branchement]
                    }
                }
            }
            //}
        }
    }

    //*********************** Силовая линия (путь от источника - Alim) ************************
    for (let Pour = 1; Pour <= Nb_Canal; Pour++) {
        for (Pour2 = 1; Pour2 <= 2; Pour2++) {
            if (Canal[Pour].Bout[Pour2].Quoi == 'Une_Alim') {
                Canal[Pour].Etat = Un;
                Canal[Pour].Alim_Exhaust = 1;
                for (Pour3 = 1; Pour3 <= Nb_Alimentation; Pour3++) {
                    for (Pour4 = 1; Pour4 <= Canal[Pour].NbPoint; Pour4++) {
                        if (Canal[Pour].ParcoursX[Pour4] == AliMentation[Pour3].X && Canal[Pour].ParcoursY[Pour4] == AliMentation[Pour3].Y) {
                            Canal[Pour].Pressure = AliMentation[Pour3].Pressure
                        }
                    }
                }
            }
        }
    }

    for (let Fois = 1; Fois <= 4; Fois++) {
        //Присвоение входу  компонента состояние работа от силового канала
        for (let Pour = 1; Pour <= Nb_Canal; Pour++) {
            if ([Bouche, Un].includes(Canal[Pour].Etat)) {
                for (Pour2 = 1; Pour2 <= 2; Pour2++) {
                    if (Canal[Pour].Bout[Pour2].Quoi == 'Un_Carrefour') {
                        Carrefour[Canal[Pour].Bout[Pour2].Lequel].Etat = Canal[Pour].Etat;
                        Carrefour[Canal[Pour].Bout[Pour2].Lequel].Alim_Exhaust = Canal[Pour].Alim_Exhaust;
                    }
                }
            }
        }

        for (let Pour = 1; Pour <= Nb_Canal; Pour++) {
            if ([Bouche, Un].includes(Canal[Pour].Etat)) {
                for (Pour2 = 1; Pour2 <= 2; Pour2++) {
                    if (Canal[Pour].Bout[Pour2].Quoi == 'Un_Manometr') {
                        Manometr[Canal[Pour].Bout[Pour2].Lequel].Etat = Canal[Pour].Etat;
                        Manometr[Canal[Pour].Bout[Pour2].Lequel].Alim_Exhaust = Canal[Pour].Alim_Exhaust;
                        if (Manometr[Canal[Pour].Bout[Pour2].Lequel].Pressure == 0) { Manometr[Canal[Pour].Bout[Pour2].Lequel].Pressure = Canal[Pour].Pressure }
                        Manometr[Canal[Pour].Bout[Pour2].Lequel].View = 1;
                    }
                }
            }
        }

        /*for (let Pour = 1; Pour <= Nb_Canal; Pour++) {
            if ([Bouche, Un].includes(Canal[Pour].Etat)) {
                for (Pour2 = 1; Pour2 <= 2; Pour2++) {
                    if (Canal[Pour].Bout[Pour2].Quoi == 'Un_Exhaust') {
                        Exhaust[Canal[Pour].Bout[Pour2].Lequel].Alim_Exhaust = Canal[Pour].Alim_Exhaust;
                    }
                }
            }
        }*/

        for (let Pour = 1; Pour <= Nb_Canal; Pour++) {
            if ([Un, Bouche].includes(Canal[Pour].Etat)) {

                for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                    if (Canal[Pour].Bout[Pour2].Quoi == 'Un_D') {
                        if (Canal[Pour].Bout[Pour2].Branchement == 1) {
                            Distributeur[Canal[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal[Pour].Bout[Pour2].Branchement] = Canal[Pour].Etat
                            Distributeur[Canal[Pour].Bout[Pour2].Lequel].Alim_Exhaust[Canal[Pour].Bout[Pour2].Branchement] = Canal[Pour].Alim_Exhaust
                        }
                    }
                }
                for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                    if (Canal[Pour].Bout[Pour2].Quoi == 'Un_V') {
                        Verin[Canal[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal[Pour].Bout[Pour2].Branchement] = Canal[Pour].Etat;
                        Verin[Canal[Pour].Bout[Pour2].Lequel].Alim_Exhaust[Canal[Pour].Bout[Pour2].Branchement] = Canal[Pour].Alim_Exhaust;
                    }
                }
                for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                    if (Canal[Pour].Bout[Pour2].Quoi == 'Un_Valve') {
                        Valve[Canal[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal[Pour].Bout[Pour2].Branchement] = Canal[Pour].Etat;
                        Valve[Canal[Pour].Bout[Pour2].Lequel].Alim_Exhaust[Canal[Pour].Bout[Pour2].Branchement] = Canal[Pour].Alim_Exhaust;
                        if (Valve[Canal[Pour].Bout[Pour2].Lequel].Etat == 1) {
                            if (Canal[Pour].Bout[Pour2].Branchement == 1) {
                                Valve[Canal[Pour].Bout[Pour2].Lequel].Etat_Ext[2] = 1;
                                Valve[Canal[Pour].Bout[Pour2].Lequel].Alim_Exhaust[2] = 1;
                            } else {
                                Valve[Canal[Pour].Bout[Pour2].Lequel].Etat_Ext[1] = 1;
                                Valve[Canal[Pour].Bout[Pour2].Lequel].Alim_Exhaust[1] = 1;
                            }
                        }

                        if (Valve[Canal[Pour].Bout[Pour2].Lequel].Modele == 'Check_valve') {
                            if (Valve[Canal[Pour].Bout[Pour2].Lequel].Etat_Ext[1] == 0) {
                                Valve[Canal[Pour].Bout[Pour2].Lequel].Etat = 1;
                            } else { Valve[Canal[Pour].Bout[Pour2].Lequel].Etat = 2 };
                        }
                    }
                }
            }
        }
        //Присвоение выходу компонента состояние работа от силового канала
        /*for (let Pour = 1; Pour <= Nb_Valve; Pour++) {
            if (Valve[Pour].Etat == 1 && (Valve[Pour].Etat_Ext[1] == 1 || Valve[Pour].Etat_Ext[2] == 1) || Valve[Pour].Modele == 'Check_valve') {
                if (Valve[Pour].Modele == 'Check_valve' && Valve[Pour].Etat_Ext[2] == 1) {
                    Valve[Pour].Etat_Ext[1] = 0;
                    Valve[Pour].Alim_Exhaust[1] = 0;
                }
                if (Valve[Pour].Modele == 'Check_valve' && Valve[Pour].Etat_Ext[1] == 1) {
                    Valve[Pour].Etat_Ext[1] = 1, Valve[Pour].Etat_Ext[2] = 1;
                    Valve[Pour].Alim_Exhaust[1] = 1, Valve[Pour].Alim_Exhaust[2] = 1;
                }
                if (Valve[Pour].Modele == 'Shutoff_valve') {
                    Valve[Pour].Etat_Ext[1] = 1, Valve[Pour].Etat_Ext[2] = 1;
                    Valve[Pour].Alim_Exhaust[1] = 1, Valve[Pour].Alim_Exhaust[2] = 1;
                }
            } else {
                Valve[Pour].Alim_Exhaust[1] = 0, Valve[Pour].Alim_Exhaust[2] = 0;
            }
        }*/

        for (let Pour = 1; Pour <= Nb_Distributeur; Pour++) {
            if (!(['_4_3', '_5_3'].includes(Distributeur[Pour].Modele))) {
                switch (Distributeur[Pour].Etat) {
                    case 1:
                        Distributeur[Pour].Etat_Ext[3] = Distributeur[Pour].Etat_Ext[1];
                        Distributeur[Pour].Alim_Exhaust[3] = Distributeur[Pour].Alim_Exhaust[1];
                        if (Distributeur[Pour].Modele == '_2_2_') {
                            Distributeur[Pour].Etat_Ext[4] = Distributeur[Pour].Etat_Ext[1];
                            Distributeur[Pour].Alim_Exhaust[4] = Distributeur[Pour].Alim_Exhaust[1];
                        }
                        if (Distributeur[Pour].Modele == '_2_2') {
                            Distributeur[Pour].Etat_Ext[4] = Bouche;
                            Distributeur[Pour].Alim_Exhaust[4] = Un;   //Проверить
                        }
                        break;
                    case 2:
                        if (!(Distributeur[Pour].Modele == '_2_2_')) {
                            Distributeur[Pour].Etat_Ext[4] = Distributeur[Pour].Etat_Ext[1];
                            Distributeur[Pour].Alim_Exhaust[4] = Distributeur[Pour].Alim_Exhaust[1];
                        } else {
                            Distributeur[Pour].Etat_Ext[4] = Bouche;
                            Distributeur[Pour].Alim_Exhaust[4] = Un;   //Проверить
                        }
                        break;
                }
            } else {

                switch (Distributeur[Pour].Etat) {

                    case 1:
                        Distributeur[Pour].Etat_Ext[3] = Bouche;
                        Distributeur[Pour].Alim_Exhaust[3] = Un;   //Проверить
                        Distributeur[Pour].Etat_Ext[4] = Bouche;
                        Distributeur[Pour].Etat_Ext[4] = Un;    //Проверить
                        break;
                    case 2:
                        Distributeur[Pour].Etat_Ext[4] = Distributeur[Pour].Etat_Ext[1];
                        Distributeur[Pour].Alim_Exhaust[4] = Distributeur[Pour].Alim_Exhaust[1];
                        break;
                    case 3:
                        Distributeur[Pour].Etat_Ext[3] = Distributeur[Pour].Etat_Ext[1];
                        Distributeur[Pour].Alim_Exhaust[3] = Distributeur[Pour].Alim_Exhaust[1];
                        break;
                }
            }
        }
        //Присвоение силовому каналу состояния работа на выходе из компонента
        for (let Pour = 1; Pour <= Nb_Canal; Pour++) {
            //if (Canal[Pour].Etat == 0) {

            for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                if (Canal[Pour].Bout[Pour2].Quoi == 'Un_D') {
                    if ([Bouche, Un].includes(Distributeur[Canal[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal[Pour].Bout[Pour2].Branchement])) {
                        Canal[Pour].Etat = Distributeur[Canal[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal[Pour].Bout[Pour2].Branchement];
                        Canal[Pour].Alim_Exhaust = Distributeur[Canal[Pour].Bout[Pour2].Lequel].Alim_Exhaust[Canal[Pour].Bout[Pour2].Branchement];
                    }
                }
            }

            for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                if (Canal[Pour].Bout[Pour2].Quoi == 'Un_Carrefour') {
                    if ([Bouche, Un].includes(Carrefour[Canal[Pour].Bout[Pour2].Lequel].Etat)) {
                        Canal[Pour].Etat = Carrefour[Canal[Pour].Bout[Pour2].Lequel].Etat;
                        Canal[Pour].Alim_Exhaust = Carrefour[Canal[Pour].Bout[Pour2].Lequel].Alim_Exhaust;
                    }
                }
            }

            for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                if (Canal[Pour].Bout[Pour2].Quoi == 'Un_Manometr') {
                    if ([Bouche, Un].includes(Manometr[Canal[Pour].Bout[Pour2].Lequel].Etat)) {
                        Canal[Pour].Etat = Manometr[Canal[Pour].Bout[Pour2].Lequel].Etat;
                        Canal[Pour].Alim_Exhaust = Manometr[Canal[Pour].Bout[Pour2].Lequel].Alim_Exhaust;
                    }
                }
            }

            for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                if (Canal[Pour].Bout[Pour2].Quoi == 'Un_Valve') {
                    if ([Bouche, Un].includes(Valve[Canal[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal[Pour].Bout[Pour2].Branchement])) {
                        Canal[Pour].Etat = Valve[Canal[Pour].Bout[Pour2].Lequel].Etat_Ext[Canal[Pour].Bout[Pour2].Branchement];
                        Canal[Pour].Alim_Exhaust = Valve[Canal[Pour].Bout[Pour2].Lequel].Alim_Exhaust[Canal[Pour].Bout[Pour2].Branchement];
                    }
                }
            }
            //}
        }
    }

    //*********************** Присвоение каналам cиловой линии (в изолированных участках) состояния Etat = 2  ************************
    for (let Pour = 1; Pour <= Nb_Canal; Pour++) {
        for (Pour2 = 1; Pour2 <= 2; Pour2++) {
            if (Canal[Pour].Etat == Un && Canal[Pour].Alim_Exhaust == 0) {
                Canal[Pour].Etat = Bof;
            }
        }
    }


    //*********************** Отображение анимации цилиндров ************************
    for (let Pour = 1; Pour <= Nb_Canal; Pour++) { Affiche_Canal(Pour, false) }
    for (let Pour = 1; Pour <= Nb_Canal_Pilote; Pour++) { Affiche_Canal_Pilote(Pour, false) }
    for (let Pour = 1; Pour <= Nb_Verin; Pour++) {
        En_Un = Verin[Pour].Etat_Ext[1] == 1;
        En_Deux = Verin[Pour].Etat_Ext[2] == 1;
        switch (Verin[Pour].Modele) {
            case 'Simple_R':
            case 'R_Simple':
                if (Verin[Pour].Modele == 'R_Simple') { En_Un = En_Deux }
                if (En_Un) {
                    if (Verin[Pour].Tige < 9) {
                        Affiche_Verin(Pour, '#FFFFFF', false);
                        Verin[Pour].Tige++;
                        Affiche_Verin(Pour, '#000000', false);
                    }
                } else {
                    if (!((Verin[Pour].Modele == 'Simple_R') && (Verin[Pour].Etat_Ext[1] == Bouche))) {
                        if (!((Verin[Pour].Modele == 'R_Simple') && (Verin[Pour].Etat_Ext[2] == Bouche))) {
                            if (Verin[Pour].Tige > 2) {
                                Affiche_Verin(Pour, '#FFFFFF', false);
                                Verin[Pour].Tige--;
                                Affiche_Verin(Pour, '#000000', false);
                            }
                        }
                    }
                }
                break;

            case 'Double2':
            case 'Double_T':
            case 'DouBle_A':
            case 'Double_T_A':
            case 'Double_V':
                if (En_Un && En_Deux) {
                    PetitMenu('#FF0000', 'Обе камеры запитаны !');
                    //Pause(5);
                } else {
                    if (!En_Un && !En_Deux) {
                        PetitMenu('#FF0000', 'Нет камеры с питанием !');
                        //Pause(5);
                    }
                    else {
                        if (En_Un) {
                            if (Verin[Pour].Tige < 9) {
                                if (!(Verin[Pour].Etat_Ext[2] == Bouche)) {
                                    Affiche_Verin(Pour, '#FFFFFF', false);
                                    Verin[Pour].Tige++;
                                    Affiche_Verin(Pour, '#000000', false);
                                }
                            }
                        } else {
                            if (Verin[Pour].Tige > 2) {
                                if (!(Verin[Pour].Etat_Ext[1] == Bouche)) {
                                    Affiche_Verin(Pour, '#FFFFFF', false);
                                    Verin[Pour].Tige--;
                                    Affiche_Verin(Pour, '#000000', false);
                                }
                            }
                        }
                    }
                }
                break;

        }
    }
}



//Изменить состояние запорной арматуры
function Change_Etat_Valve(Numero) {
    Affiche_Valve(Numero, '#FFFFFF', false);
    Valve[Numero].Etat = 3 - Valve[Numero].Etat;
    Affiche_Valve(Numero, '#000000', false);
}


//Изменить состояние датчика
function Change_Etat_Capteur(Numero) {
    Affiche_Capteur(Numero, '#FFFFFF', false);
    Capteur[Numero].Etat = 3 - Capteur[Numero].Etat;
    Affiche_Capteur(Numero, '#000000', false);
}

//Поместите датчик
function Place_Capteur_a(Numero, Combien) {
    if (Capteur[Numero].Etat != Combien) { Change_Etat_Capteur(Numero) }
}

//Поместите дозатор
function Place_Distributeur_a(Numero, Combien) {
    Affiche_Distributeur(Numero, '#FFFFFF', false);
    Distributeur[Numero].Etat = Combien;
    Commande[Distributeur[Numero].Com[1].Laquelle].Etat = Distributeur[Numero].Etat;
    Commande[Distributeur[Numero].Com[2].Laquelle].Etat = Distributeur[Numero].Etat;
    Affiche_Distributeur(Numero, '#000000', false);
}
