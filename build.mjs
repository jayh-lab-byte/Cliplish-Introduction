import {mkdir,copyFile,cp,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});
await mkdir('dist');
await copyFile('index.html','dist/index.html');
await cp('assets','dist/assets',{recursive:true});
console.log('Built dist/');
