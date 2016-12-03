classes=(barbarian bard cleric druid sorcerer fighter wizard monk paladin ranger rogue warlock)
for i in ${classes[@]}; do
	mkdir -p classes/${i}
	ls images/| grep ${i} | xargs -n1 -i cp ./images/{} ./classes/${i}/{}
done

races=(human elf half-elf orc half-orc halfling gnome dwarf tiefling goliath genasi)
for i in ${races[@]}; do
	mkdir -p races/${i}
	ls images/| grep ${i} | xargs -n1 -i cp ./images/{} ./races/${i}/{}
done
exit 0
