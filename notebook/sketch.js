// https://twitter.com/atulvinayak/status/1305116417419653120
j=24,m=0,draw=(a=>{for(v=(i=>w/3*(n=noise)(i)-k),createCanvas(w=1e3,w),noFill(),background('#fd7'),translate(0,m--),i=0,y=0;y<w-m;y+=j)for(x=k=90;x<w-k;x+=9)if(y+k>-m?curve(v(i++)+x,v(i++)+y,x,j+y,x+9,j+y,v(i++)+x,v(i++)+y):i+=4,x+=v(i++)%9,n(x*y)<.13)y+=j});
