// global

	var NIVMAX = 20;

// functions

	function toogle(step)
	{
		        $('.contour').hide();
		        $('#win'+step).show();
	}

	function Next(step)
	{
		        var data = 'step=' + step;
		        switch (step)
		{
			        case (1):		// race
				                data += '&race=' + raceSelected;
				                break;

			        case (2):		// classe
				                data += '&classe=' + classeSelected + '&level=' + $('#level').text();
				                break;

			        case (3):		// back
				                data += '&back=' + backSelected;
				                break;

			        case (4):		// carac
				                data += '&c0=' + $('#carac_brut_0').text();
				                data += '&c1=' + $('#carac_brut_1').text();
				                data += '&c2=' + $('#carac_brut_2').text();	
				                data += '&c3=' + $('#carac_brut_3').text();
				                data += '&c4=' + $('#carac_brut_4').text();
				                data += '&c5=' + $('#carac_brut_5').text();
				                data += '&delf1=' + $('#delf1:checked').val();
				                data += '&delf2=' + $('#delf2:checked').val();
				                break;

			        case (5):		// capacites
				                for (var n=4; n<=20; n++)
				{
					        if ($('#don_'+n).length && $('#don_'+n).val() > 0)
					{
						        data += '&don['+n+']=' + $('#don_'+n).val();
					}
					else if ($('#augCarac_'+n+'_1').length)
					{
						        data += '&augCarac['+n+'][0]=' + $('#augCarac_'+n+'_0').val();
						        data += '&augCarac['+n+'][1]=' + $('#augCarac_'+n+'_1').val();
					}
				}

				                if ($('#voieClasse').length)	data += '&voieClasse=' + $('#voieClasse').val();
				                break;

			        case (6):		// competences & langues
				                var competences = new Array();
				                for (var n=0; n<4; n++)
				{
					        if ($('select[name="comp_'+n+'"]').length)
					{
						        competences[n] = new Array();
						        $('select[name="comp_'+n+'"]').each(function(i) {
							        competences[n].push($(this).val());
						});
						        data += '&competences['+n+']='+competences[n];
					}
				}
				                var langues = new Array();
				                for (var n=0; n<4; n++)
				{
					        if ($('select[name="lang_'+n+'"]').length)
					{
						        langues[n] = new Array();
						        $('select[name="lang_'+n+'"]').each(function(i) {
							        langues[n].push($(this).val());
						});
						        data += '&langues['+n+']='+langues[n];
					}
				}
				                if ($('#don_1').length)
					        data += '&don[1]=' + $('#don_1').val();
				                break;

			        case (7):		// options
				                if ($('#customRace').length)	data += '&customRace='  + $('#customRace').val();
				                if ($('#styleCombat1').length)	data += '&styleCombat1=' + $('#styleCombat1').val();
				                if ($('#styleCombat2').length)	data += '&styleCombat2=' + $('#styleCombat2').val();
				                if ($('#customClasse0').length)	data += '&customClasse0=' + $('#customClasse0').val();
				                if ($('#customClasse1').length)	data += '&customClasse1=' + $('#customClasse1').val();
				                if ($('#customClasse2').length)	data += '&customClasse2=' + $('#customClasse2').val();
				                if ($('#customClasse3').length)	data += '&customClasse3=' + $('#customClasse3').val();
				                if ($('#customClasse4').length)	data += '&customClasse4=' + $('#customClasse4').val();
				                if ($('#customClasse5').length)	data += '&customClasse5=' + $('#customClasse5').val();
				                for (var n=1; n<=20; n++)
				{
					        if ($('#customFeat_'+n).length)
					{
						        data += '&customFeat['+n+']=' + $('#customFeat_'+n).val();
					}
				}
				                data += '&pack=' + $('#pack').val();
				                if ($('#backSpe').length)	data += '&backSpe=' + $('#backSpe').val();
				                break;

			        case (8):		// pv
				                data += '&pv[0]=' + $('#numPvTotal').text();
				                for (var n=1; n<=20; n++)
				{
					        if ($('#pv_brut_'+n).length)
					{
						        data += '&pv['+n+']=' + $('#pv_brut_'+n).text();
					}
				}
				                break;

			        case (9):		// sorts
				                var sortsInnes  = new Array();
				                var sortsConnus = new Array();
				                for (var n=0; n<6; n++)
				{
					        if ($('select[name="sortsInnes_'+n+'"]').length)
					{
						        sortsInnes[n] = new Array();
						        $('select[name="sortsInnes_'+n+'"]').each(function(i) {
							        sortsInnes[n].push($(this).val());
						});
						        data += '&sortsInnes['+n+']='+sortsInnes[n];
					}
				}

				                for (var n=0; n<=9; n++)
				{
					        if ($('select[name="sortsConnus_'+n+'"]').length)
					{
						        sortsConnus[n] = new Array();
						        $('select[name="sortsConnus_'+n+'"]').each(function(i) {
							        sortsConnus[n].push($(this).val());
						});
						        data += '&sortsConnus['+n+']='+sortsConnus[n];
					}
					else if(n>0)
						        break;
				}
				                break;

			        case (10):		// equipement
				                data += '&po='  +$('#po').val();
				                data += '&armure='  +$('#armure').val();
				                data += '&bouclier='+$('#bouclier').val();

				                var armes = new Array();
				                $('select[name="arme"]').each(function(i) {
					        armes.push($(this).val());
				});
				                data += '&armes='+armes;
				                var NBarmes = new Array();
				                $('select[name="NBarme"]').each(function(i) {
					        NBarmes.push($(this).val());
				});
				                data += '&NBarmes='+NBarmes;

				                var outils = new Array();
				                $('select[name="outils"]').each(function(i) {
					        outils.push($(this).val());
				});
				                data += '&outils='+outils;

				                var objets = new Array();
				                $('select[name="objet"]').each(function(i) {
					        objets.push($(this).val());
				});
				                data += '&objets='+objets;
				                var NBobjets = new Array();
				                $('select[name="NBobjet"]').each(function(i) {
					        NBobjets.push($(this).val());
				});
				                data += '&NBobjets='+NBobjets;

				                var oms = new Array();
				                $('select[name="om"]').each(function(i) {
					        oms.push($(this).val());
				});
				                data += '&oms='+oms;
				                break;

			        case (11):		// perso
				                data += '&nom='+$('#nom').val() + '&sexe='+$('#sexe').val() + '&age='+$('#age').val() + '&taille='+$('#taille').val() + '&poids='+$('#poids').val() + '&align='+$('#align').val() + '&yeux='+$('#yeux').val() + '&peau='+$('#peau').val() + '&cheveux='+$('#cheveux').val()  + '&apparence='+$('#apparence').val();
				                data += '&trait1='+$('#trait1').val() + '&trait2='+$('#trait2').val() + '&ideal='+$('#ideal').val() + '&lien='+$('#lien').val() + '&defaut='+$('#defaut').val() + '&histoire='+$('#histoire').val();
				                break;
		}

		        $.ajax({
			        url : 'ajax_next.php',
    type : 'POST',
    data : data,
    dataType : 'html', // On désire recevoir du HTML
    success : function(responseText, statut)
			{ 
				                     toogle (parseInt(step+1));
				                     $('#currentPerso').html(responseText);

				                     switch (step)
				{
					        case (3):
						                $('#currentDetail').html(INTRO[step]);
						                $('#currentDetail').append(lanceDes());
						                initEtape(step);
						                break;
					        default:
						                $('#currentDetail').html(INTRO[step]);
						                initEtape(step);
						                break;
				}
			             }
		});
	}

	function initEtape(step)
	{
		        var data = '&initEtape='+step;

		        $.ajax({
			        url : 'ajax_main.php',
    type : 'POST',
    data : data,
    dataType : 'html', // On désire recevoir du HTML
    success : function(responseText, statut)
			{ 
				                     switch (step)
				{
					        case (0):
						                changeRace(raceSelected);
						                break;
					        case (1):
						                changeClasse(classeSelected, levelSelected);
						                break;
					        case (2):
						                changeBack(backSelected);
						                break;
					        case (3) : $('#carac').html(responseText);
						                changeCarac(0,0);
						                break;
					        case (4) : $('#capacites').html(responseText);
						                break;
					        case (5) : $('#competences').html(responseText);
						                break;
					        case (6) : $('#options').html(responseText);
						                break;
					        case (7) : $('#pv').html(responseText);
						                changePv(0, 1, 12);
						                break
					        case (8) : $('#sorts').html(responseText);
						                break;
					        case (9) : $('#equipement').html(responseText);
						                break;
					        case (10) : $('#perso').html(responseText);
						                break;
					        case (11) : $('#calcul').html(responseText);
						                break;
				}
			             }
		});
	}

	function changeRace(i)
	{
		        $('.imgRChoix').removeClass('imgSelect');
		        $('#race_'+i).addClass('imgSelect');
		        $('#currentDetail').html(RACE[i]);
		        raceSelected = i;
	}

	function changeClasse(i, l)
	{
		        $('.imgCChoix').removeClass('imgSelect');
		        $('#classe_'+i).addClass('imgSelect');
		        $('#currentDetail').html(CLASSE[i]);
		        $('#level').text(l);
		        classeSelected = i;
	}

	function changeNiveau(sens)
	{
		        var old = parseInt($('#level').text());
		        if ((old > 1 || sens === 1) && (old < NIVMAX || sens === -1))
		{
			        $('#level').html(old+sens);
			        levelSelected = (old+sens);
		}
	}

	function changeBack(i)
	{
		        $('.imgBChoix').removeClass('imgSelect');
		        $('#back_'+i).addClass('imgSelect');
		        $('#currentDetail').html(BACK[i]);
		        backSelected = i;
	}

	function changeCarac(sens, i)
	{
		        var old = parseInt($('#carac_brut_'+i).text());
		        if ( ((old > 3 || sens === 1) && (old < 18 || sens === -1)) || (sens === 0))
		{
			        var caracInit = new Array(0,0,0,0,0,0,0,0,0,1,2,3,4,5,7,9,100,100,100);
			        var pts = 0;
			        $('#carac_brut_'+i).html(old+sens);

			        for (var i=0; i<6; i++)
			{
				        var select = $('#carac_brut_'+i).text();
				        pts = pts + parseInt(caracInit[select]);
				        if ($('#carac_race_'+i).text())
					        var bonus = $('#carac_race_'+i).text()
				else
					var bonus = 0;

				        if ($('#delf1:checked').val() === i || $('#delf2:checked').val() === i)
					        bonus = bonus + 1;

				        var bonusCar = Math.floor((parseInt(select) + parseInt(bonus))/2-5);
				        if (bonusCar >= 0)
					        bonusCar = '+' + bonusCar;
				        $('#carac_'+i).html(parseInt(select) + parseInt(bonus) + ' (' + bonusCar +')');
			}
	
			        if (pts > 99)
			{
				        $('#numPts').removeClass('redFlag greenFlag');
				        $('#numPts').html('<strong>Hors barème</strong> (score > 15)');
			}
			else
			{
				        $('#numPts').html('<strong>' + pts + '</strong>/27 &nbsp; &nbsp; &nbsp; &nbsp;');

				        if (pts === 27)
					        $('#numPts').removeClass('redFlag').addClass('greenFlag');
				else if (pts > 27)
					        $('#numPts').removeClass('greenFlag').addClass('redFlag');
				else
					$('#numPts').removeClass('redFlag greenFlag');
			}
		}
	}

	function lanceDes()
	{
		        lancer = '';
		        for (var i=1; i<=6; i++)
		{
			        var de1 = Math.floor((Math.random()*6)+1);
			        var de2 = Math.floor((Math.random()*6)+1);
			        var de3 = Math.floor((Math.random()*6)+1);
			        var de4 = Math.floor((Math.random()*6)+1);
//			lancer = lancer + (de1 + de2 + de3 + de4 - Math.min(de1, de2, de3, de4));
//			if (i<6) lancer += " - "
			        lancer = lancer + '<span class="dice">' + (de1 + de2 + de3 + de4 - Math.min(de1, de2, de3, de4)) + '</span> (' + de1 +' '+ de2 +' '+ de3 +' '+ de4 + ')<br />';
		}
		        return (lancer);
	}

	function changePack(champ)
	{
		        $('#currentDetail').html(champ);
	}

	function changeDon(champ)
	{
		        $('#currentDetail').html(champ);
	}

	function changeCapacites(champ)
	{
		        $('#currentDetail').html(champ);
	}

	function changePv(sens, n, max)
	{
		        var old = parseInt($('#pv_brut_'+n).text());
		        if ( ((old > 1 || sens === 1) && (old < max || sens === -1)) || (sens === 0))
		{
			        $('#pv_brut_'+n).html(old+sens);
			        var pv = 0;
			        var l = $('#level').text();
			        for (var i=1; i<=l; i++)
			{
				        var bonus = 0;
				        var select = parseInt($('#pv_brut_'+i).text());
				        if ($('#pv_con_'+i).text())
					        bonus  = parseInt($('#pv_con_'+i).text());
				        if ($('#pv_race_'+i).text())
					        bonus = bonus + parseInt($('#pv_race_'+i).text());
				        $('#pv_'+i).html(select + bonus);
				        pv = pv + select + bonus;
			}
	
			        $('#numPvTotal').html(pv);
		}
	}

	function changeEquip(obj, type)
	{
		        var nbArme  = $('select[name="arme"]').length;
		        var nbOutils= $('select[name="outils"]').length;
		        var nbObjet = $('select[name="objet"]').length;
		        var nbOm    = $('select[name="om"]').length;

		        if (type === 3 && obj.id === 'arme_'+nbArme)
		{
			        $('#armes').prepend('<br/>');
			        var nbArmeSuiv = nbArme+1;
			        $('#armes').prepend($('#NBarme_'+nbArme).clone().attr('id', 'NBarme_'+(nbArmeSuiv)));
			        $('#armes').prepend($('#arme_'  +nbArme).clone().attr('id', 'arme_'  +(nbArmeSuiv)));
		}
		else if (type === 4 && obj.id === 'outils_'+nbOutils)
		{
			        $('#outils').prepend('<br/>');
			        $('#outils').prepend($('#outils_'+nbOutils).clone().attr('id', 'outils_'+(++nbOutils)));
			        $('#currentDetail').text('');
		}
		else if (type === 5 && obj.id === 'objet_'+nbObjet)
		{
			        $('#objets').prepend('<br/>');
			        var nbObjetSuiv = nbObjet+1;
			        $('#objets').prepend($('#NBobjet_'+nbObjet).clone().attr('id', 'NBobjet_'+(nbObjetSuiv)));
			        $('#objets').prepend($('#objet_'  +nbObjet).clone().attr('id', 'objet_'  +(nbObjetSuiv)));
			        $('#currentDetail').text('');
		}
	}

	function changeAge(obj, race)
	{
		        var age = obj.value;
		        var index = 0;
		        if (age <= AGE[race*5+1])
			        index = 1;
		else if (age <= AGE[race*5+2])
			        index = 2;
		else if (age <= AGE[race*5+3])
			        index = 3;
		else if (age <= AGE[race*5+4])
			        index = 4;

		        if (index > 0)
		{
			        age = Math.round((age-AGE[race*5+index-1]) * (AGE[index]-AGE[index-1]) / (AGE[race*5+index]-AGE[race*5+index-1]) + AGE[index-1]);
			        $('#ageR').html(AGEAPP + age + ANS);
		}
		else
			$('#ageR').html('');
	}

	function clickEquip(obj, type)
	{
		        if (obj.value > 0)
		{
			        if (type === 1)
			{
				        $('#currentDetail').html(ARMURE[obj.value]);
			}
			else if (type === 2)
			{
				        $('#currentDetail').html(BOUCLIER[obj.value]);
			}
			else if (type === 3)
			{
				        $('#currentDetail').html(ARME[obj.value]);
			}
		}
		else
		{
			        $('#currentDetail').text('');
		}
	}

	function ClipBoard() 
	{
		        var bbcode = Output.innerHTML;

		        bbcode = bbcode.replace(/<strong>/g, '[b]');
		        bbcode = bbcode.replace(/<\/strong>/g, '[/b]');
		        bbcode = bbcode.replace(/<em>/g, '[i]');
		        bbcode = bbcode.replace(/<\/em>/g, '[/i]');
		        bbcode = bbcode.replace(/<h2>/g, '[size=150]');
		        bbcode = bbcode.replace(/<\/h2>/g, '[/size]<br />');
		        bbcode = bbcode.replace(/<h3>/g, '<br /><br />[size=130]');
		        bbcode = bbcode.replace(/<\/h3>/g, '[/size]<br />');
		        bbcode = bbcode.replace(/<form name="formSorts" method="post" action="..\/dnd\/sorts\.php" target="_blank">/g, '');
		        bbcode = bbcode.replace(/<br><input type="submit" class="bBook" name="display" value="Générer grimoire">/g, '');
		        bbcode = bbcode.replace(/<\/form>/g, '');
//alert(bbcode);
		        var myWindow = window.open('', '_blank', 'location=no, titlebar=no, menubar=no, toolbar=no, width=700, height=600');
		        myWindow.document.write('<div style=\'font-size:80%\'>'+bbcode+'</div>');
	}