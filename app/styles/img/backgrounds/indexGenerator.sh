#/bin/bash
echo "@import '../../_variables.scss';" > index.scss
echo "@import '../../_mixins.scss';" >> index.scss
echo "" >> index.scss
echo ".classImg {" >> index.scss
echo "	max-height:330px;" >> index.scss
find . -type d | grep -v miniatures | grep -v '^.$' | sed -s 's/\.\///g' | xargs -n1 -i echo "find {} -type f | sed = | sed 'N;s/\n/ /'" | sh | sed -e 's/\([^ ]*\) \([^\/]*\)\/\(.*\)/\t\&\.\2\.item-\1 {\n\t\t@include background-contain("\.\/\2\/\3")\n\t}/g' >> index.scss
echo "}" >> index.scss
