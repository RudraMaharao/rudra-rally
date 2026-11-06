import * as esbuild from 'esbuild';
await esbuild.build({entryPoints:['src/main.js'],bundle:true,minify:true,format:'esm',outfile:'dist/game.js'});
console.log('Built expanded Rudra Rally');
