var RACE = [
	    '<h3>Human</h3> 				<p><strong>Ability Score Increase</strong>. +1 for each ability score.</p> <p><strong>Size</strong>. Medium (M).</p> <p><strong>Speed</strong>. 30 feet per round.</p>	<p><strong>Languages</strong>. You can speak, read, and write Common and one extra language of your choice.</p>',
	    '<h3>Human (feat option)</h3>	<p><strong>Ability Score Increase</strong>. +1 in two ability scores of your choice.</p> <p><strong>Size</strong>. Medium (M).</p> <p><strong>Speed</strong>. 30 feet per round.</p> <p><strong>Languages</strong>. You can speak, read, and write Common and one extra language of your choice.</p><p><strong>Skills</strong>. You gain proficiency in one skill of your choice.</p><p><strong>Feat</strong>. You gain one feat of your choice.</p>',
	    '<h3>High elf</h3>				<p><strong>Ability Score Increase</strong>. Dexterity +2, Intelligence +1.</p> <p><strong>Size</strong>. Medium (M).</p> <p><strong>Speed</strong>. 30 feet per round.</p> <p><strong>Darkvision</strong>.</p> <p><strong>Keen Senses</strong>.</p> <p><strong>Fey Ancestry</strong>.</p> <p><strong>Trance</strong>.</p> <p><strong>Elf Weapon Training</strong>.</p> <p><strong>Cantrips</strong>.</p> <p><strong>Languages</strong>. You can speak, read, and write Common, Elvish and one extra language of your choice.</p>',
	    '<h3>Wood elf</h3>				<p><strong>Ability Score Increase</strong>. Dexterity +2, Wisdom +1.</p> <p><strong>Size</strong>. Medium (M).</p> <p><strong>Speed</strong>. 35 feet per round.</p> <p><strong>Darkvision</strong>.</p> <p><strong>Keen Senses</strong>.</p> <p><strong>Fey Ancestry</strong>.</p>	<p><strong>Trance</strong>.</p>	<p><strong>Elf Weapon Training</strong>.</p>	<p><strong>Mask of the Wild</strong>.</p>	<p><strong>Languages</strong>. You can speak, read, and write Common and Elvish.</p>',
	    '<h3>Dark elf</h3>				<p><strong>Ability Score Increase</strong>. Dexterity +2, Charisma +1.</p> <p><strong>Size</strong>. Medium (M).</p> <p><strong>Speed</strong>. 30 feet per round.</p> <p><strong>Superior Darkvision</strong>.</p> <p><strong>Keen Senses</strong>.</p> <p><strong>Fey Ancestry</strong>.</p>	<p><strong>Trance</strong>.</p>	<p><strong>Drow Weapon Training</strong>.</p> <p><strong>Sunlight Sensitivity</strong>.</p> <p><strong>Drow Magic</strong>.</p> <p><strong>Languages</strong>. You can speak, read, and write Common and Elvish.</p>',
	    '<h3>Lightfoot halfling</h3>	<p><strong>Ability Score Increase</strong>. Dexterity +2, Charisma +1.</p> 	<p><strong>Size</strong>. Small (S).</p>	<p><strong>Speed</strong>. 25 feet per round.</p> <p><strong>Lucky</strong>.</p> <p><strong>Brave</strong>.</p> <p><strong>Halfling Nimbleness</strong>.</p> <p><strong>Naturally Stealthy</strong>.</p>	<p><strong>Languages</strong>. You can speak, read, and write Common and Halfling.</p>',
	    '<h3>Stout halfling</h3>		<p><strong>Ability Score Increase</strong>. Dexterity +2, Constitution +1.</p> <p><strong>Size</strong>. Small (S).</p> <p><strong>Speed</strong>. 25 feet per round.</p> <p><strong>Lucky</strong>.</p> <p><strong>Brave</strong>.</p> <p><strong>Halfling Nimbleness</strong>.</p> <p><strong>Stout Resilience</strong>.</p> <p><strong>Languages</strong>. You can speak, read, and write Common and Halfling.</p>',
	    '<h3>Hill dwarf</h3>			<p><strong>Ability Score Increase</strong>. Constitution +2, Wisdom +1.</p>	<p><strong>Size</strong>. Medium (M).</p> <p><strong>Speed</strong>. 25 feet per round. Your speed is not reduced by wearing heavy armor.</p><p><strong>Darkvision</strong>.</p> <p><strong>Dwarven Resilience</strong>.</p> <p><strong>Dwarven Combat Training</strong>.</p> <p><strong>Tool Proficiency</strong>.</p> <p><strong>Stonecunning</strong>.</p> <p><strong>Dwarven Toughness</strong>.</p> <p><strong>Languages</strong>. You can speak, read, and write Common and Dwarvish.</p>',
	    '<h3>Mountain dwarf</h3>		<p><strong>Ability Score Increase</strong>. Constitution +2, Strength +2.</p> <p><strong>Size</strong>. Medium (M).</p>	<p><strong>Speed</strong>. 25 feet per round. Your speed is not reduced by wearing heavy armor.</p> <p><strong>Darkvision</strong>.</p> <p><strong>Dwarven Resilience</strong>.</p> <p><strong>Dwarven Combat Training</strong>.</p> <p><strong>Tool Proficiency</strong>.</p> <p><strong>Stonecunning</strong>.</p> <p><strong>Dwarven Armor Training</strong>.</p> <p><strong>Languages</strong>. You can speak, read, and write Common and Dwarvish.</p>',
	    '<h3>Forest gnome</h3>			<p><strong>Ability Score Increase</strong>. Intelligence +2, Dexterity +1.</p> <p><strong>Size</strong>. Small (S).</p> <p><strong>Speed</strong>. 25 feet per round.</p> <p><strong>Darkvision</strong>.</p> <p><strong>Gnome Cunning</strong>.</p> <p><strong>Natural Illusionist</strong>.</p> <p><strong>Speak with Small Beasts</strong>.</p> <p><strong>Languages</strong>. You can speak, read, and write Common and Gnomish.</p>',
	    '<h3>Rock gnome</h3>			<p><strong>Ability Score Increase</strong>. Intelligence +2, Constitution +1.</p> <p><strong>Size</strong>. Small (S).</p> <p><strong>Speed</strong>. 25 feet per round.</p> <p><strong>Darkvision</strong>.</p> <p><strong>Gnome Cunning</strong>.</p> <p><strong>Artificer\'s Lore</strong>.</p> <p><strong>Tinker</strong>.</p> <p><strong>Languages</strong>. You can speak, read, and write Common and Gnomish.</p>',
	    '<h3>Half-elf</h3>				<p><strong>Ability Score Increase</strong>. Charisma +2, +1 in two other ability scores of your choice.</p> <p><strong>Size</strong>. Medium (M).</p> <p><strong>Speed</strong>. 30 feet per round.</p> <p><strong>Darkvision</strong>.</p> <p><strong>Fey Ancestry</strong>.</p> <p><strong>Skill Versatility</strong>.</p> <p><strong>Languages</strong>. You can speak, read, and write Common, Elvish and one extra language of your choice.</p>',
	    '<h3>Half-orc</h3>				<p><strong>Ability Score Increase</strong>. Strength +2, Constitution +1.</p> <p><strong>Size</strong>. Medium (M).</p> <p><strong>Speed</strong>. 30 feet per round.</p> <p><strong>Darkvision</strong>.</p> <p><strong>Menacing</strong>.</p> <p><strong>Relentless Endurance</strong>.</p> <p><strong>Savage Attacks</strong>.</p> <p><strong>Languages</strong>. You can speak, read, and write Common and Orc.</p>',
	    '<h3>Dragonborn</h3>			<p><strong>Ability Score Increase</strong>. Strength +2, Charisma +1.</p> <p><strong>Size</strong>. Medium (M).</p> <p><strong>Speed</strong>. 30 feet per round.</p> <p><strong>Draconic Ancestry (Breath Weapon, Damage Resistance)</strong>.</p> <p><strong>Languages</strong>. You can speak, read, and write Common and Draconic.</p>',
	    '<h3>Tiefling</h3>				<p><strong>Ability Score Increase</strong>. Intelligence +1, Charisma +2.</p> <p><strong>Size</strong>. Medium (M).</p> <p><strong>Speed</strong>. 30 feet per round.</p> <p><strong>Darkvision</strong>.</p> <p><strong>Hellish Resistance</strong>.</p> <p><strong>Infernal Legacy</strong>.</p> <p><strong>Languages</strong>. You can speak, read, and write Common and Infernal.</p>'
];

var AGE = [
	    0, 20,  40,  60,  80,
	    0, 20,  40,  60,  80,
	    0, 25, 450, 650, 750,
	    0, 25, 450, 650, 750,
	    0, 25, 450, 650, 750,
	    0, 20,  70, 120, 150,
	    0, 20,  70, 120, 150,
	    0, 20, 150, 280, 350,
	    0, 20, 150, 280, 350,
	    0, 20, 220, 420, 500,
	    0, 20, 220, 420, 500,
	    0, 20, 100, 150, 180,
	    0, 15,  35,  55,  75,
	    0, 15,  45,  65,  80,
	    0, 20,  47,  74, 100
];

var CLASSE = [
	    '<h3>Barbarian</h3>	<p><strong>HP</strong>: 1d12 per barbarian level</p><p><strong>Armor</strong>: Light armor, medium armor, shields</p><p><strong>Weapons</strong>: Simple weapons, martial weapons</p><p><strong>Tools</strong>: None</p><p><strong>Saving Throws</strong>: Strength, Constitution</p><p><strong>Skills</strong>: Choose two from Athletics, Animal Handling, Intimidation, Nature, Perception and Survival</p>',
	    '<h3>Bard</h3>		<p><strong>HP</strong>: 1d8 per bard level</p><p><strong>Armor</strong>: Light armor</p><p><strong>Weapons</strong>: Simple weapons, light crossbow, longsword, shortsword, rapier</p><p><strong>Tools</strong>: Three music instruments of your choice</p><p><strong>Saving Throws</strong>: Dexterity, Charisma</p><p><strong>Skills</strong>: Choose two of your choice</p>',
	    '<h3>Cleric</h3>	<p><strong>HP</strong>: 1d8 per cleric level</p><p><strong>Armor</strong>: Light armor, medium armor, shields</p><p><strong>Weapons</strong>: Simple weapons</p><p><strong>Tools</strong>: None</p><p><strong>Saving Throws</strong>: Wisdom, Charisma</p><p><strong>Skills</strong>: Choose two from History, Insight, Medicine, Persuasion and Religion</p>',
	    '<h3>Druid</h3>		<p><strong>HP</strong>: 1d8 per druid level</p><p><strong>Armor</strong>: Light armor, medium armor, shields</p><p><strong>Weapons</strong>: Club, dagger, dart, javelin, mace, quarterstaff, scimitar, sling, sickle, spear</p><p><strong>Tools</strong>: Herbalism kit</p><p><strong>Saving Throws</strong>: Intelligence, Wisdom</p><p><strong>Skills</strong>: Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion and Survival</p>',
	    '<h3>Sorcerer</h3>	<p><strong>HP</strong>: 1d6 per sorcerer level</p><p><strong>Armor</strong>: None</p><p><strong>Weapons</strong>: Dagger, dart, sling, quarterstaff, light crossbow</p><p><strong>Tools</strong>: None</p><p><strong>Saving Throws</strong>: Constitution, Charisma</p><p><strong>Skills</strong>: Choose two from Arcana, Intimidation, Insight, Persuasion, Religion and Deception</p>',
	    '<h3>Fighter</h3>	<p><strong>HP</strong>: 1d10 per fighter level</p><p><strong>Armor</strong>: All armor, shields</p><p><strong>Weapons</strong>: Simple weapons, martial weapons</p><p><strong>Tools</strong>: None</p><p><strong>Saving Throws</strong>: Strength, Constitution</p><p><strong>Skills</strong>: Choose two from Acrobatics, Athletics, Animal Handling, History, Intimidation, Insight, Perception and Survival</p>',
	    '<h3>Wizard</h3>	<p><strong>HP</strong>: 1d6 per wizard level</p><p><strong>Armor</strong>: None</p><p><strong>Weapons</strong>: Dagger, dart, sling, quarterstaff, light crossbow</p><p><strong>Tools</strong>: None</p><p><strong>Saving Throws</strong>: Intelligence, Wisdom</p><p><strong>Skills</strong>: Choose two from Arcana, History, Insight, Investigation, Medicine and Religion</p>',
	    '<h3>Monk</h3>		<p><strong>HP</strong>: 1d8 per monk level</p><p><strong>Armor</strong>: None</p><p><strong>Weapons</strong>: Simple weapons, shortsword</p><p><strong>Tools</strong>: one type of artisan\'s tools or one musical instrument of your choice</p><p><strong>Saving Throws</strong>: Strength, Dexterity</p><p><strong>Skills</strong>: Choose two from Acrobatics, Athletics, Stealth, History, Insight and Religion</p>',
	    '<h3>Paladin</h3>	<p><strong>HP</strong>: 1d10 per paladin level</p><p><strong>Armor</strong>: All armor, shields</p><p><strong>Weapons</strong>: Simple weapons, martial weapons</p><p><strong>Tools</strong>: None</p><p><strong>Saving Throws</strong>: Wisdom, Charisma</p><p><strong>Skills</strong>: Choose two from Athletics, Intimidation, Insight, Medicine, Persuasion and Religion</p>',
	    '<h3>Ranger</h3>	<p><strong>HP</strong>: 1d10 per ranger level</p><p><strong>Armor</strong>: Light armor, medium armor, shields</p><p><strong>Weapons</strong>: Simple weapons, martial weapons</p><p><strong>Tools</strong>: None</p><p><strong>Saving Throws</strong>: Strength, Dexterity</p><p><strong>Skills</strong>: Choose three from Athletics, Stealth, Animal Handling, Insight, Investigation, Nature, Perception and Survival</p>',
	    '<h3>Rogue</h3>		<p><strong>HP</strong>: 1d8 per rogue level</p><p><strong>Armor</strong>: Light armor</p><p><strong>Weapons</strong>: Simple weapons, hand crossbow, shortsword, longsword, rapier, shortbow</p><p><strong>Tools</strong>: Thieves\' tools</p><p><strong>Saving Throws</strong>: Dexterity, Intelligence</p><p><strong>Skills</strong>: Choose four from Acrobatics, Athletics, Stealth, Sleight of Hand, Intimidation, Insight, Investigation, Perception, Persuasion, Performance and Deception</p>',
	    '<h3>Warlock</h3>	<p><strong>HP</strong>: 1d8 per warlock level</p><p><strong>Armor</strong>: Light armor</p><p><strong>Weapons</strong>: Simple weapons</p><p><strong>Tools</strong>: None</p><p><strong>Saving Throws</strong>: Wisdom, Charisma</p><p><strong>Skills</strong>: Choose two from Arcana, History, Intimidation, Investigation, Nature, Religion and Deception</p>'
];

var BACK = [
	    '<h3>Acolyte</h3>						<p><strong>Skill Proficiencies</strong>: Insight, Religion</p><p><strong>Languages</strong>: Two of your choice</p><p><strong>Equipment</strong>: A holy symbol (a gift to you when you entered the priesthood), a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and a belt pouch containing 15 gp</p><p><strong>Feature</strong>: Shelter of the Faithful.<br />As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle. You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.</p>',
	    '<h3>Entertainer/Gladiator</h3>			<p><strong>Skill Proficiencies</strong>: Acrobatics, Performance</p><p><strong>Tool Proficiencies</strong>: Disguise kit, one type of musical instrument</p><p><strong>Equipment</strong>: A musical instrument (one of your choice), the favor of an admirer (love letter, lock of hair, or trinket), a costume, and a belt pouch containing 15 gp</p><p><strong>Feature</strong>: By Popular Demand</p>',
	    '<h3>Guild Artisan/Guild Merchant</h3>	<p><strong>Skill Proficiencies</strong>: Insight, Persuasion</p><p><strong>Tool Proficiencies</strong>: One type of artisan\'s tools</p><p><strong>Languages</strong>: One of your choice</p><p><strong>Equipment</strong>: A set of artisan\'s tools (one of your choice), a letter of introduction from your guild, a set of traveler\'s clothes, and a belt pouch containing 15 gp.</p><p><strong>Feature</strong>: Guild Membership</p>',
	    '<h3>Charlatan</h3>						<p><strong>Skill Proficiencies</strong>: Sleight of Hand, Deception</p><p><strong>Tool Proficiencies</strong>: Disguise kit, forgery kit</p><p><strong>Equipment</strong>: A set of fine clothes, a disguise kit, tools of the con of your choice (ten stoppered bottles filled with colored liquid, a set of weighted dice, a deck of marked cards, or a signet ring of an imaginary duke), and a belt pouch containing 15 gp</p><p><strong>Feature</strong>: False Identity</p>',
	    '<h3>Criminal/Spy</h3>					<p><strong>Skill Proficiencies</strong>: Stealth, Deception</p><p><strong>Tool Proficiencies</strong>: One type of gaming set, thieves\' tools</p><p><strong>Equipment</strong>: A crowbar, a set of dark common clothes including a hood, and a belt pouch containing 15 gp.</p><p><strong>Feature</strong>: Criminal Contact</p>',
	    '<h3>Hermit</h3>						<p><strong>Skill Proficiencies</strong>: Medicine, Religion</p><p><strong>Languages</strong>: One of your choice</p><p><strong>Tool Proficiencies</strong>: Herbalism kit</p><p><strong>Equipment</strong>: A scroll case stuffed full of notes from your studies or prayers, a winter blanket, a set of common clothes, an herbalism kit, and 5 gp.</p><p><strong>Feature</strong>: Discovery</p>',
	    '<h3>Outlander</h3>						<p><strong>Skill Proficiencies</strong>: Athletics, Survival</p><p><strong>Languages</strong>: One of your choice</p><p><strong>Tool Proficiencies</strong>: One type of musical instrument</p><p><strong>Equipment</strong>: A staff, a hunting trap, a trophy from an animal you killed, a set of traveler\'s clothes, and a belt pouch containing 10 gp</p><p><strong>Feature</strong>: Wanderer</p>',
	    '<h3>Urchin</h3>						<p><strong>Skill Proficiencies</strong>: Sleight of Hand, Stealth</p><p><strong>Tool Proficiencies</strong>: Disguise kit, thieves\' tools</p><p><strong>Equipment</strong>: A small knife, a map of the city you grew up in, a pet mouse, a token to remember your parents by, a set of common clothes, and a belt pouch containing 10 gp.</p><p><strong>Feature</strong>: City Secrets</p>',
	    '<h3>Folk hero</h3>						<p><strong>Skill Proficiencies</strong>: Animal Handling, Survival</p><p><strong>Tool Proficiencies</strong>: One type of artisan\'s tools, vehicles (land)</p><p><strong>Equipment</strong>: A set of artisan\'s tools (one of your choice), a shovel, an iron pot, a set of common clothes, and a belt pouch containing 10 gp.</p><p><strong>Feature</strong>: Rustic Hospitality</p>',
	    '<h3>Sailor/Pirate</h3>					<p><strong>Skill Proficiencies</strong>: Athletics, Perception</p><p><strong>Tool Proficiencies</strong>: Navigator\'s tools, vehicles (water)</p> <p><strong>Equipment</strong>: A belaying pin (club), 50 feet of silk rope, a lucky charm such as a rabbit foot or a small stone with a hole in the center (or you may roll for a random trinket on the Trinkets table), a set of common clothes, and a belt pouch containing 10 gp.</p><p><strong>Feature</strong>: Ship\'s Passage</p>',
	    '<h3>Noble</h3>							<p><strong>Skill Proficiencies</strong>: History, Persuasion</p><p><strong>Languages</strong>: One of your choice</p><p><strong>Tool Proficiencies</strong>: One type of gaming set</p><p><strong>Equipment</strong>: A set of fine clothes, a signet ring, a scroll of pedigree, and a purse containing 25 gp.</p><p><strong>Feature</strong>: Position of Privilege</p>',
	    '<h3>Sage</h3>							<p><strong>Skill Proficiencies</strong>: Arcana, History</p><p><strong>Languages</strong>: Two of your choice</p><p><strong>Equipment</strong>: A bottle of black ink, a quill, a small knife, a letter from a dead colleague posing a question you have not yet been able to answer, a set of common clothes, and a belt pouch containing 10 gp.</p><p><strong>Feature</strong>: Researcher</p>',
	    '<h3>Soldier</h3>						<p><strong>Skill Proficiencies</strong>: Athletics, Intimidation</p><p><strong>Tool Proficiencies</strong>: One type of gaming set, vehicles (land)</p><p><strong>Equipment</strong>: An insignia of rank, a trophy taken from a fallen enemy (a dagger, broken blade, or piece of a banner), a set of bone dice or deck of cards, a set of common clothes, and a belt pouch containing 10 gp.</p><p><strong>Feature</strong>: Military Rank</p>',
	    '<h3>Knight</h3>						<p><strong>Skill Proficiencies</strong>: History, Persuasion</p><p><strong>Languages</strong>: One of your choice</p><p><strong>Tool Proficiencies</strong>: One type of gaming set</p><p><strong>Equipment</strong>: A set of fine clothes, a signet ring, a scroll of pedigree, and a purse containing 25 gp</p><p><strong>Feature</strong>: Retainers</p>',
	    '<h3>[Your Background]</h3>				<p>If you created your own background, select this choice. The application will not automatically fill the fields and will let you complete your creation data manually at the end on the Character Sheet.</p>'
];

var INTRO = ['', '', '', 
	'<p>The Ability Scores can be assigned using one of the these two ways:</p><p>1) Spend 27 points according to the Ability Score Point Cost (max 15 for every Ability Score). The number of assigned points is indicated at the bottom. A typical character would be:</p><h3>15 - 14 - 13 - 12 - 10 - 8</h3><p>or</p><p>2) Roll 6 series of 4d6, dropping the lowest die each time. Assign the results to the 6 Ability Scores as you want. Here\'s an example:</p>',
	'',
	'',
	'',
	'<p>The hit points (hp) can be determined using one of these two ways:</p><p>1) Max hp at 1st level then rounded up average for each level after.</p><p>or</p><p>2) Max hp at 1st level then roll HD for each level after.</p>',
	'',
	'<p>The preselected equipment is just an example given by the rulebook for a 1st level character. Feel free to modify it.</p><p>Talk to your DM to determine how many gold coins you can use according to your character\'s level.</p>',
	'',
	'<p>* Feature or Feat taken in account by the app.</p><p><input type="button" class="bXport" value="Export" onclick="location=\'export.php\'" /></p><p>Export you character in a .csv file to keep a local copy. You can upload it into this tool later to update your character.</p><p><button class="bLang" value="" onclick="window.open(\'sheet.php\', \'_blank\')" >Finalize</button></p><p>Automatically fill the official D&D 5 Character Sheet, ready for printing (don\'t forget to set the option \'Background images\' from your navigator). However, you can manually edit the fields before.</p><p><input type="button" class="bXport" value="BBcode"   onclick="ClipBoard()" /></p><p>Open a pop-up with the character sheet in BBCode format, and copy/paste it on any compatible online forum or bulletin board that uses BBcode.</p>'
];

var STYLECOMBAT = [
	    '<h3>Archery</h3>				<p>You gain a +2 bonus to attack rolls you make with ranged weapons.</p>',
	    '<h3>Defense</h3>				<p>While you are wearing armor, you gain a +1 bonus to AC.</p>',
	    '<h3>Dueling</h3>				<p>When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.</p>',
	    '<h3>Great Weapon Fighting</h3>	<p>When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.</p>',
	    '<h3>Protection</h3>			<p>When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.</p>',
	    '<h3>Two-Weapon Fighting</h3>	<p>When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.</p>'
];

var VOIEBAR = [
	    '<h3>Berserker</h3>			<ul><li>Lvl 3: Frenzy</li><li>Lvl 6: Mindless Rage</li><li>Lvl 10: Intimidating Presence</li><li>Lvl 14: Retaliation</li></ul>',
	    '<h3>Totem Warrior</h3>		<ul><li>Lvl 3: Spirit Seeker, Totem Spirit</li><li>Lvl 6: Aspect of the Beast</li><li>Lvl 10: Spirit Walker</li><li>Lvl 14: Totemic Attunement</li></ul>'
];

var VOIEBRD = [
	    '<h3>Lore</h3>				<ul><li>Lvl 3: Bonus proficiencies, Cutting Words</li><li>Lvl 6: Additional Magical Secrets</li><li>Lvl 14: Peerless Skill</li></ul>',
	    '<h3>Valor</h3>				<ul><li>Lvl 3: Bonus proficiencies, Combat Inspiration</li><li>Lvl 6: Extra Attack</li><li>Lvl 14: Battle Magic</li></ul>'
]; 

var VOIECLE = [
	    '<h3>Life</h3>				<ul><li>Lvl 1: Domain Spells</li><ul><li>Lvl 1: <em>bless, cure wounds</em></li><li>Lvl 3: <em>lesser restoration, spiritual weapon</em></li><li>Lvl 5: <em>beacon of hope, revivify</em></li><li>Lvl 7: <em>death ward, guardian of faith</em></li><li>Lvl 9: <em>mass cure wounds, raise dead</em></li></ul><li>Lvl 1: Bonus Proficiency, Disciple of Life</li><li>Lvl 2: Channel Divinity: Preserve Life</li><li>Lvl 6: Blessed Healer</li><li>Lvl 8: Divine Strike</li><li>Lvl 17: Supreme Healing</li></ul>',
	    '<h3>War</h3>				<ul><li>Lvl 1: Domain Spells</li><ul><li>Lvl 1: <em>divine favor, shield of faith</em></li><li>Lvl 3: <em>magic weapon, spiritual weapon</em></li><li>Lvl 5: <em>crusader\'s mantle, spirit guardians</em></li><li>Lvl 7: <em>freedom of movement, stoneskin</em></li><li>Lvl 9: <em>flame strike, hold monster</em></li></ul><li>Lvl 1: Bonus Proficiency, War Priest</li><li>Lvl 2: Channel Divinity: Guided Strike</li><li>Lvl 6: Channel Divinity: War God\'s Blessing</li><li>Lvl 8: Divine Strike</li><li>Lvl 17: Avatar of Battle</li></ul>',
	    '<h3>Knowledge</h3>			<ul><li>Lvl 1: Domain Spells</li><ul><li>Lvl 1: <em>command, identify</em></li><li>Lvl 3: <em>augury, suggestion</em></li><li>Lvl 5: <em>nondetection, speak with dead</em></li><li>Lvl 7: <em>arcane eye, confusion</em></li><li>Lvl 9: <em>legend lore, scrying</em></li></ul></li><li>Lvl 1: Blessings of Knowledge</li><li>Lvl 2: Channel Divinity: Knowledge of the Ages</li><li>Lvl 6: Channel Divinity: Read Thoughts</li><li>Lvl 8: Potent Spellcasting</li><li>Lvl 17: Visions of the Past</li></ul>',
	    '<h3>Trickery</h3>			<ul><li>Lvl 1: Domain Spells</li><ul><li>Lvl 1: <em>charm person, disguise self</em></li><li>Lvl 3: <em>mirror image, pass without trace</em></li><li>Lvl 5: <em>blink, dispel magic</em></li><li>Lvl 7: <em>dimension door, polymorph</em></li><li>Lvl 9: <em>dominate person, modify memory</em></li></ul></li><li>Lvl 1: Blessing of the Trickster</li><li>Lvl 2: Channel Divinity: Invoke Duplicity</li><li>Lvl 6: Channel Divinity: Cloak of Shadows</li><li>Lvl 8: Divine Strike</li><li>Lvl 17: Improved Duplicity</li></ul>',
	    '<h3>Light</h3>				<ul><li>Lvl 1: Domain Spells</li><ul><li>Lvl 1: <em>burning hands, faerie fire</em></li><li>Lvl 3: <em>flaming sphere, scorching ray</em></li><li>Lvl 5: <em>daylight, fireball</em></li><li>Lvl 7: <em>guardian of faith, wall of fire</em></li><li>Lvl 9: <em>flame strike, scrying</em></li></ul></li><li>Lvl 1: Bonus Cantrip, Warding Flare</li><li>Lvl 2: Channel Divinity: Radiance of the Dawn</li><li>Lvl 6: Improved Flare</li><li>Lvl 8: Potent Spellcasting</li><li>Lvl 17: Corona of Light</li></ul>',
	    '<h3>Nature</h3>			<ul><li>Lvl 1: Domain Spells</li><ul><li>Lvl 1: <em>animal friendship, speak with animals</em></li><li>Lvl 3: <em>barkskin, spike growth</em></li><li>Lvl 5: <em>plant growth, wind wall</em></li><li>Lvl 7: <em>dominate beast, grasping vine</em></li><li>Lvl 9: <em>insect plague, tree stride</em></li></ul></li><li>Lvl 1: Acolyte of Nature, Bonus Proficiency</li><li>Lvl 2: Channel Divinity: Charm Animals and Plants</li><li>Lvl 6: Dampen Elements</li><li>Lvl 8: Divine Strike</li><li>Lvl 17: Master of Nature</li></ul>',
	    '<h3>Tempest</h3>			<ul><li>Lvl 1: Domain Spells</li><ul><li>Lvl 1: <em>fog cloud, thunderwave</em></li><li>Lvl 3: <em>gust of wind, shatter</em></li><li>Lvl 5: <em>call lightning, sleet storm</em></li><li>Lvl 7: <em>control water, ice storm</em></li><li>Lvl 9: <em>destructive wave, insect plague</em></li></ul></li><li>Lvl 1: Bonus Proficiency, Wrath of the Storm</li><li>Lvl 2: Channel Divinity: Destructive Wrath</li><li>Lvl 6: Thunderbolt Strike</li><li>Lvl 8: Divine Strike</li><li>Lvl 17: Stormborn</li></ul>'
];

var VOIEDRU = [
	    '<h3>Circle of the Land</h3>	<ul><li>Lvl 2: Bonus Cantrip, Natural Recovery, Circle Spells</li><li>Lvl 6: Land\'s Stride</li><li>Lvl 10: Nature\'s Ward</li><li>Lvl 14: Nature\'s Sanctuary</li></ul>',
	    '<h3>Circle of the Moon</h3>	<ul><li>Lvl 2: Combat Wild Shape, Circle Forms</li><li>Lvl 6: Primal Strike</li><li>Lvl 10: Elemental Wild Shape</li><li>Lvl 14: Thousand Forms</li></ul>'
];

var VOIEENS = [
	    '<h3>Draconic Bloodline</h3>	<ul><li>Lvl 1: Dragon Ancestor, Draconic Resilience</li><li>Lvl 6: Elemental Affinity</li><li>Lvl 14: Dragon Wings</li><li>Lvl 18: Draconic Presence</li></ul>',
	    '<h3>Wild Magic</h3>			<ul><li>Lvl 1: Wild Magic Surge, Tide of Chaos</li><li>Lvl 6: Bend Luck</li><li>Lvl 14: Controlled Chaos</li><li>Lvl 18: Spell Bombardment</li></ul>'
];

var VOIEGUE = [
	    '<h3>Champion</h3>				<ul><li>Lvl 3: Improved Critical</li><li>Lvl 7: Remarkable Athlete</li><li>Lvl 10: Additional Fighting Style</li><li>Lvl 15: Superior Critical</li><li>Lvl 18: Survivor</li></ul>',
	    '<h3>Battle Master</h3>			<ul><li>Lvl 3: Student of War, Combat Superiority</li><li>Lvl 7: Know your Enemy</li><li>Lvl 10: Improved Combat Superiority</li><li>Lvl 15: Relentless</li></ul>',
	    '<h3>Eldritch Knight</h3>		<ul><li>Lvl 3: Spellcasting, Weapon Bond</li><li>Lvl 7: War Magic</li><li>Lvl 10: Eldritch Strike</li><li>Lvl 15: Arcane Charge</li><li>Lvl 18: Improved War magic</li></ul>'
];

var VOIEMAG = [
	    '<h3>School of Evocation</h3>		<p>Evocation spells manipulate magical energy to produce a desired effect. Some call up blasts of fire or lightning. Others channel positive energy to heal wounds.</p><ul><li>Lvl 2: Evocation Savant, Sculpt Spells</li><li>Lvl 6: Potent Cantrip</li><li>Lvl 10: Empowered Evocation</li><li>Lvl 14: Overchannel</li></ul>',
	    '<h3>School of Illusion</h3>		<p>Illusion spells deceive the senses or minds of others. They cause people to see things that are not there, to miss things that are there, to hear phantom noises, or to remember things that never happened. Some illusions create phantom images that any creature can see, but the most insidious illusions plant an image directly in the mind of a creature.</p><ul><li>Lvl 2: Illusion Savant, Improved Minor Illusion</li><li>Lvl 6: Malleable Illusions</li><li>Lvl 10: Illusory Self</li><li>Lvl 14: Illusory Reality</li></ul>',
	    '<h3>School of Abjuration</h3>		<p>Abjuration spells are protective in nature, though some of them have aggressive uses. They create magical barriers, negate harmful effects, harm trespassers, or banish creatures to other planes of existence.</p><ul><li>Lvl 2: Abjuration Savant, Arcane Ward</li><li>Lvl 6: Projected Ward</li><li>Lvl 10: Improved Abjuration</li><li>Lvl 14: Spell Resistance</li></ul>',
	    '<h3>School of Divination</h3>		<p>Divination spells reveal information, whether in the form of secrets long forgotten, glimpses of the future, the locations of hidden things, the truth behind illusions, or visions of distant people or places.</p><ul><li>Lvl 2: Divination Savant, Portent</li><li>Lvl 6: Expert Divination</li><li>Lvl 10: The Third Eye</li><li>Lvl 14: Greater Portent</li></ul>',
	    '<h3>School of Enchantment</h3>		<p>Enchantment spells affect the minds of others, influencing or controlling their behavior. Such spells can make enemies see the caster as a friend, force creatures to take a course of action, or even control another creature like a puppet.</p><ul><li>Lvl 2: Enchantment Savant, Hypnotic Gaze</li><li>Lvl 6: Instinctive Charm</li><li>Lvl 10: Split Enchantment</li><li>Lvl 14: Alter Memories</li></ul>',
	    '<h3>School of Conjuration</h3>		<p>Conjuration spells involve the transportation of objects and creatures from one location to another. Some spells summon creatures or objects to the caster\'s side, whereas others allow the caster to teleport to another location. Some conjurations create objects or effects out of nothing.</p><ul><li>Lvl 2: Conjuration Savant, Minor Conjuration</li><li>Lvl 6: Benign Transposition</li><li>Lvl 10: Focused Conjuration</li><li>Lvl 14: Durable Summons</li></ul>',
	    '<h3>School of Necromancy</h3>		<p>Necromancy spells manipulate the energies of life and death. Such spells can grant an extra reserve of life force, drain the life energy from another creature, create the undead, or even bring the dead back to life. Creating the undead through the use of necromancy spells such as <em>animate dead</em> is not a good act, and only evil casters use such spells frequently.</p><ul><li>Lvl 2: Necromancy Savant, Grim Harvest</li><li>Lvl 6: Undead Thralls</li><li>Lvl 10: Inured to Undeath</li><li>Lvl 14: Command Undead</li></ul>',
	    '<h3>School of Transmutation</h3>	<p>Transmutation spells change the properties of a creature, object, or environment. They might turn an enemy into a harmless creature, bolster the strength of an ally, make an object move at the caster\'s command, or enhance a creature\'s innate healing abilities to rapidly recover from injury.</p><ul><li>Lvl 2: Transmutation Savant, Minor Alchemy</li><li>Lvl 6: Transmutater\'s Stone</li><li>Lvl 10: Shapechanger</li><li>Lvl 14: Master Transmuter</li></ul>'
];

var VOIEMOI = [
	    '<h3>Way of the Open Hand</h3>		<ul><li>Lvl 3: Open Hand Technique</li><li>Lvl 6: Wholeness of Body</li><li>Lvl 11: Tranquility</li><li>Lvl 17: Quivering Palm</li></ul>',
	    '<h3>Way of the Four Elements</h3>	<ul><li>Lvl 3: Disciple of the Elements</li><li>Lvl 6: Elemental Disciplines</li><li>Lvl 11: Elemental Disciplines</li><li>Lvl 17: Elemental Disciplines</li></ul>',
	    '<h3>Way of Shadow</h3>				<ul><li>Lvl 3: Shadow Arts</li><li>Lvl 6: Shadow Step</li><li>Lvl 11: Cloak of Shadows</li><li>Lvl 17: Opportunist</li></ul>'
];

var VOIEPAL = [
	    '<h3>Oath of Devotion</h3>		<ul><li>Lvl 1: Oath spells</li><li>Lvl 3: Channel Divinity (sacred weapon), Channel Divinity (turn the unholy)</li><li>Lvl 7: Aura of Devotion</li><li>Lvl 15: Purity of Spirit</li><li>Lvl 20: Holy Nimbus</li></ul>',
	    '<h3>Oath of the Ancients</h3>	<ul><li>Lvl 1: Oath spells</li><li>Lvl 3: Channel Divinity (nature\'s wrath), Channel Divinity (turn the faithless)</li><li>Lvl 7: Aura of Warding</li><li>Lvl 15: Undying Sentinel</li><li>Lvl 20: Elder Champion</li></ul>',
	    '<h3>Oath of Vengeance</h3>		<ul><li>Lvl 1: Oath spells</li><li>Lvl 3: Channel Divinity (abjure enemy), Channel Divinity (vow of enmity)</li><li>Lvl 7: Retenless Avenger</li><li>Lvl 15: Soul of vengeance</li><li>Lvl 20: Avenging Angel</li></ul>'
];

var VOIEROD = [
	    '<h3>Hunter</h3>		  	<ul><li>Lvl 3: Hunter\'s Prey</li><li>Lvl 7: Defensive Tactics</li><li>Lvl 11: Multiattack</li><li>Lvl 15: Superior Hunter\'s Defense</li></ul>',
	    '<h3>Beast Master</h3>		<ul><li>Lvl 3: Ranger\'s Companion</li><li>Lvl 7: Exceptional Training</li><li>Lvl 11: Bestial Fury</li><li>Lvl 15: Share spells</li></ul>'
];

var VOIEROU = [
	    '<h3>Thief</h3>				<ul><li>Lvl 3: Second-Story Work, Fast Hands</li><li>Lvl 9: Supreme Sneak</li><li>Lvl 13: Use Magic Device</li><li>Lvl 16: Thief\'s Reflexes</li></ul>',
	    '<h3>Assassin</h3>			<ul><li>Lvl 3: Assassinate, Bonus Proficiencies</li><li>Lvl 9: Infiltration Expertise</li><li>Lvl 13: Impostor</li><li>Lvl 16: Death Strike</li></ul>',
	    '<h3>Arcane Trickster</h3>	<ul><li>Lvl 3: Spellcasting, Mage Hand Legerdemain</li><li>Lvl 9: Magical Ambush</li><li>Lvl 13: Versatile Trickster</li><li>Lvl 16: Spell Thief</li></ul>'
];

var VOIESOR = [
	    '<h3>The Fiend</h3>				<ul><li>Lvl 1: Expanded Spell List</li><li>Lvl 1: Dark One\'s Blessing</li><li>Lvl 6: Dark One\'s Own Luck</li><li>Lvl 10: Fiendish Resilience</li><li>Lvl 14: Hurl Through Hell</li></ul>',
	    '<h3>The Archfey</h3>			<ul><li>Lvl 1: Expanded Spell List</li><li>Lvl 1: Fey Presence</li><li>Lvl 6: Misty Escape</li><li>Lvl 10: Beguiling Defenses</li><li>Lvl 14: Dark Delirium</li></ul>',
	    '<h3>The Great Old One</h3>		<ul><li>Lvl 1: Expanded Spell List</li><li>Lvl 1: Awakened Mind</li><li>Lvl 6: Entropic Ward</li><li>Lvl 10: Thought Shield</li><li>Lvl 14: Create Thrall</li></ul>'
];

var PREREQUIS = [
	    '', '', '', '', '', '', '<h3>Defensive Duelist</h3><p>Prerequisite: Dexterity 13 or higher</p>', '', '', '',
	    '<h3>Elemental Adept</h3><p>Prerequisite: Ability to cast at least one spell</p>', '<h3>Grappler</h3><p>Prerequisite: Strength 13 or higher</p>', '', '', '<h3>Heavily Armored</h3><p>Prerequisite: Proficiency with medium armor</p>', '<h3>Heavy Armor Master</h3><p>Prerequisite: Proficiency with heavy armor</p>', '<h3>Inspiring Leader</h3><p>Prerequisite: Charisma 13 or higher</p>', '', '', '',
	    '', '', '', '', '<h3>Medium Armor Master</h3><p>Prerequisite: Proficiency with medium armor</p>', '', '<h3>Moderately Armored</h3><p>Prerequisite: Proficiency with light armor</p>', '', '', '',
	    '', '<h3>Ritual Caster</h3><p>Prerequisite: Intelligence or Wisdom 13 or higher</p>', '', '', '', '', '', '<h3>Skulker</h3><p>Prerequisite: Dexterity 13 or higher</p>', '<h3>Spell Sniper</h3><p>Prerequisite: Ability to cast at least one spell</p>', '',
	    '', '<h3>War Caster</h3><p>Prerequisite: Ability to cast at least one spell</p>', ''
];

var PACK = [ '<p>Barbarian Pack (a):</p><ul><li>Grande hache</li><li>2 Handaxes</li><li>4 javelins</li><li>Explorer\'s Pack</li></ul>',
			 '<p>Barbarian Pack (b):</p><ul><li>Martial melee weapons</li><li>Simple weapon</li><li>4 javelins</li><li>Explorer\'s Pack</li></ul>',
			 '<p>Bard Pack (a):</p><ul><li>Leather armor</li><li>Rapier</li><li>Dagger</li><li>Luth</li><li>Diplomat\'s Pack</li></ul>',
			 '<p>Bard Pack (b):</p><ul><li>Leather armor</li><li>Longsword</li><li>Dagger</li><li>Musical instrument</li><li>Entertainer\'s Pack</li></ul>',
			 '<p>Cleric Pack (a):</p><ul><li>Scale mail</li><li>Shield</li><li>Mace</li><li>Light crossbow</li><li>Holy symbol</li><li>Priest\'s Pack</li></ul>',
			 '<p>Cleric Pack (b):</p><ul><li>Leather armor</li><li>Shield</li><li>Warhammer</li><li>Simple weapon</li><li>Holy symbol</li><li>Explorer\'s Pack</li></ul>',
			 '<p>Druid Pack (a):</p><ul><li>Leather armor</li><li>Shield</li><li>Scimitar</li><li>Druidic focus</li><li>Explorer\'s Pack</li></ul>',
			 '<p>Druid Pack (b):</p><ul><li>Leather armor</li><li>Simple weapon</li><li>Simple melee weapons</li><li>Druidic focus</li><li>Explorer\'s Pack</li></ul>',
			 '<p>Sorcerer Pack (a):</p><ul><li>Light crossbow and 20 bolts</li><li>2 daggers</li><li>Component pouch</li><li>Dungeoneer\'s Pack</li></ul>',
			 '<p>Sorcerer Pack (b):</p><ul><li>Simple Weapon</li><li>2 daggers</li><li>Arcane focus</li><li>Explorer\'s Pack</li></ul>',
			 '<p>Fighter Pack (a):</p><ul><li>Chain mail</li><li>Shield</li><li>Martial weapon</li><li>Light crossbow</li><li>Dungeoneer\'s Pack</li></ul>',
			 '<p>Fighter Pack (b):</p><ul><li>Leather</li><li>2 martial weapons</li><li>2 handaxes</li><li>Longbow</li><li>Explorer\'s Pack</li></ul>',
			 '<p>Wizard Pack (a):</p><ul><li>Quarterstaff</li><li>Spellbook</li><li>Component pouch</li><li>Scholar\'s Pack</li></ul>',
			 '<p>Wizard Pack (b):</p><ul><li>Dagger</li><li>Spellbook</li><li>Arcane focus</li><li>Explorer\'s Pack</li></ul>',
			 '<p>Monk Pack (a):</p><ul><li>Shortsword</li><li>10 darts</li><li>Dungeoneer\'s Pack</li></ul>',
			 '<p>Monk Pack (b):</p><ul><li>Simple Weapon</li><li>10 darts</li><li>Explorer\'s Pack</li></ul>',
			 '<p>Paladin Pack (a):</p><ul><li>Chain mail</li><li>Shield</li><li>Martial weapon</li><li>5 javelins</li><li>Holy symbol</li><li>Priest\'s Pack</li></ul>',
			 '<p>Paladin Pack (b):</p><ul><li>Chain mail</li><li>2 martial weapons</li><li>Simple melee weapons</li><li>Holy symbol</li><li>Explorer\'s Pack</li></ul>',
			 '<p>Ranger Pack (a):</p><ul><li>Scale mail</li><li>2 shortswords</li><li>Arc long</li><li>Dungeoneer\'s Pack</li></ul>',
			 '<p>Ranger Pack (b):</p><ul><li>Leather</li><li>2 Simple Melee Weapons</li><li>Longbow</li><li>Explorer\'s Pack</li></ul>',
			 '<p>Rogue Pack (a):</p><ul><li>Leather</li><li>Rapier</li><li>Shortbow</li><li>2 daggers</li><li>Thieves\' tools</li><li>Burglar\'s Pack</li></ul>',
			 '<p>Rogue Pack (b):</p><ul><li>Leather</li><li>2 shortswords</li><li>2 Daggers</li><li>Thieves\' tools</li><li>Dungeoneer\'s Pack</li></ul>',
			 '<p>Warlock Pack (a):</p><ul><li>Leather</li><li>2 daggers</li><li>Light crossbow and 20 bolts</li><li>Simple Weapon</li><li>Component pouch</li><li>Scholar\'s Pack</li></ul>',
			 '<p>Warlock Pack (b):</p><ul><li>Leather</li><li>2 daggers</li><li>2 simple weapons</li></li><li>Arcane focus</li><li>Dungeoneer\'s Pack</li></ul>'
];

var ARMURE = [' ',
	'<h3>Padded</h3>			<p>Light Armor (8 lb.)<br />AC: 11 + Dex modifier<br />Stealth Disadvantage</p>',
	'<h3>Leather</h3> 			<p>Light Armor (10 lb.)<br />AC: 11 + Dex modifier</p>',				
	'<h3>Studded leather</h3>	<p>Light Armor (13 lb.)<br />AC: 12 + Dex modifier</p>',				
	'<h3>Hide</h3> 				<p>Medium Armor (12 lb.)<br />AC: 12 + Dex modifier (max 2)</p>',			 
	'<h3>Chain shirt</h3> 		<p>Medium Armor (20 lb.)<br />AC: 13 + Dex modifier (max 2)</p>',				 
	'<h3>Scale mail</h3> 		<p>Medium Armor (45 lb.)<br />AC: 14 + Dex modifier (max 2)<br />Stealth Disadvantage</p>',	
	'<h3>Breastplate</h3>		<p>Medium Armor (20 lb.)<br />AC: 14 + Dex modifier (max 2)</p>',	
	'<h3>Half plate</h3> 		<p>Medium Armor (40 lb.)<br />AC: 15 + Dex modifier (max 2)<br />Stealth Disadvantage</p>', 	

	'<h3>Ring mail</h3> 		<p>Heavy Armor (40 lb.)<br />AC: 14<br />Stealth Disadvantage</p>', 	 
	'<h3>Chain mail</h3> 		<p>Heavy Armor (55 lb.)<br />AC: 16<br />Stealth Disadvantage<br />Speed -10 ft. if Str < 13</p>', 	
	'<h3>Splint</h3> 			<p>Heavy Armor (60 lb.)<br />AC: 17<br />Stealth Disadvantage<br />Speed -10 ft. if Str < 15</p>', 	   	 	
	'<h3>Plate</h3> 			<p>Heavy Armor (65 lb.)<br />AC: 18<br />Stealth Disadvantage<br />Speed -10 ft. if Str < 15</p>'
];

var BOUCLIER = [ ' ',
	'<h3>Shield</h3> 			<p>Shield (6 lb.)<br />AC: +2</p>'
];

var ARME = [ ' ',
	'<h3>Unarmed strike</h3>',
	'<h3>Quaterstaff</h3> 		<p>Simple Melee Weapons (4 lb.) <br />Damage: 1d6 (bludgeoning)<br />Versatile (1d8)</p>',
	'<h3>Dagger</h3> 			<p>Simple Melee Weapons (1 lb.)<br />Damage: 1d4 (piercing)<br />Finesse, light, thrown (range 20/60)</p>',
	'<h3>Club</h3> 				<p>Simple Melee Weapons (2 lb.) <br />Damage: 1d4 (bludgeoning)<br />Light</p>',
	'<h3>Handaxe</h3> 			<p>Simple Melee Weapons (2 lb.) <br />Damage: 1d6 (slashing)<br />Light, thrown (range 20/60)</p>',
	'<h3>Javelin</h3> 			<p>Simple Melee Weapons (2 lb.) <br />Damage: 1d6 (piercing)<br />Thrown (range 30/120)</p>',
	'<h3>Spear</h3> 			<p>Simple Melee Weapons (3 lb.) <br />Damage: 1d6 (piercing)<br />Thrown (range 20/60), versatile (1d8)</p>',
	'<h3>Light hammer</h3> 		<p>Simple Melee Weapons (2 lb.) <br />Damage: 1d4 (bludgeoning)<br />Light, thrown (range 20/60)</p>',
	'<h3>Mace</h3> 				<p>Simple Melee Weapons (4 lb.) <br />Damage: 1d6 (bludgeoning)</p>',
	'<h3>Greatclub</h3> 		<p>Simple Melee Weapons (10 lb.) <br />Damage: 1d8 (bludgeoning)<br />Two-handed</p>',
	'<h3>Sickle</h3> 			<p>Simple Melee Weapons (2 lb.) <br />Damage: 1d4 (slashing)<br />Light</p>',

	'<h3>Crossbow, light</h3> 	<p>Simple Ranged Weapons (5 lb.) <br />Damage: 1d8 (piercing)<br />Ammunition (range 80/320), loading, two-handed</p>',
	'<h3>Shortbow</h3> 			<p>Simple Ranged Weapons (2 lb.) <br />Damage: 1d6 (piercing)<br />Ammunition (range 80/320), two-handed</p>',
	'<h3>Dart</h3> 				<p>Simple Ranged Weapons (1/4 lb.)<br />Damage: 1d4 (piercing)<br />Finesse, thrown (range 30/120)</p>',
	'<h3>Sling</h3> 			<p>Simple Ranged Weapons<br />Damage: 1d4 (bludgeoning)<br />Ammunition (range 30/120)</p>',

	'<h3>Scimitar</h3> 			<p>Martial Melee Weapons (3 lb.)<br />Damage: 1d6 (slashing)<br />Finesse, light</p>',
	'<h3>Glaive</h3> 			<p>Martial Melee Weapons (6 lb.)<br />Damage: 1d10 (slashing)<br />Heavy, reach, two-handed</p>',
	'<h3>Greatsword</h3>		<p>Martial Melee Weapons (6 lb.)<br />Damage: 2d6 (slashing)<br />Heavy, two-handed</p>',
	'<h3>Shortsword</h3> 		<p>Martial Melee Weapons (2 lb.)<br />Damage: 1d6 (piercing)<br />Finesse, light</p>',
	'<h3>Longsword</h3> 		<p>Martial Melee Weapons (3 lb.)<br />Damage: 1d8 (slashing)<br />Versatile (1d10)</p>',
	'<h3>Flail</h3> 			<p>Martial Melee Weapons (2 lb.)<br />Damage: 1d8 (bludgeoning)</p>',
	'<h3>Whip</h3> 				<p>Martial Melee Weapons (3 lb.)<br />Damage: 1d4 (slashing)<br />Finesse, reach</p>',
	'<h3>Greataxe</h3> 			<p>Martial Melee Weapons (7 lb.)<br />Damage: 1d12 (slashing)<br />Heavy, two-handed</p>',
	'<h3>Battlaxes</h3> 		<p>Martial Melee Weapons (4 lb.)<br />Damage: 1d8 (slashing)<br />Versatile (1d10)</p>',
	'<h3>Halberd</h3> 			<p>Martial Melee Weapons (6 lb.)<br />Damage: 1d10 (slashing)<br />Heavy, reach, two-handed</p>',

	'<h3>Lance</h3> 			<p>Martial Melee Weapons (6 lb.)<br />Damage: 1d12 (piercing)<br />Reach, special</p>',
	'<h3>Maul</h3> 				<p>Martial Melee Weapons (10 lb.)<br />Damage: 2d6 (bludgeoning)<br />Heavy, two-handed</p>',
	'<h3>Warhammer</h3>			<p>Martial Melee Weapons (2 lb.)<br />Damage: 1d8 (bludgeoning)<br />Versatile (1d10)</p>',
	'<h3>Morningstar</h3> 		<p>Martial Melee Weapons (4 lb.)<br />Damage: 1d8 (piercing)</p>',
	'<h3>War pick</h3> 			<p>Martial Melee Weapons (2 lb.)<br />Damage: 1d8 (piercing)</p>',
	'<h3>Pike</h3> 				<p>Martial Melee Weapons (18 lb.)<br />Damage: 1d10 (piercing)<br />Heavy, reach, two-handed</p>',
	'<h3>Rapier</h3> 			<p>Martial Melee Weapons (2 lb.)<br />Damage: 1d8 (piercing)<br />Finesse</p>',
	'<h3>Trident</h3> 			<p>Martial Melee Weapons (4 lb.)<br />Damage: 1d6 (piercing)<br />Thrown (range 20/60), versatile (1d8)</p>',

	'<h3>Crossbow, hand</h3>	<p>Martial Ranged Weapons (3 lb.) <br />Damage: 1d6 (piercing)<br />Ammunition (range 30/120), light, loading</p>',
	'<h3>Crossbow, heavy</h3>  	<p>Martial Ranged Weapons (18 lb.) <br />Damage: 1d10 (piercing)<br />Ammunition (range 100/400), heavy, loading, two-handed</p>',
	'<h3>Longbow</h3> 			<p>Martial Ranged Weapons (2 lb.) <br />Damage: 1d8 (piercing)<br />Ammunition (range 150/600), heavy, two-handed</p>',
	'<h3>Net</h3> 				<p>Martial Ranged Weapons (3 lb.) <br />Damage: -<br />Special, thrown (range 5/15)</p>',
	'<h3>Blowgun</h3> 			<p>Martial Ranged Weapons (1 lb.) <br />Damage: 1 (piercing)<br />Ammunition (range 25/100), loading</p>'
];

var AGEAPP = 'Apparent age: ';
var ANS    = ' years';