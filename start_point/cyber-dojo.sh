
ln -s /etc/jquery/node_modules ${CYBER_DOJO_SANDBOX}/node_modules

if [ -f .jshintrc ]; then
  jshint --config .jshintrc *.js
fi

if [ $? == 0 ]; then
  node *Test*.js
fi
