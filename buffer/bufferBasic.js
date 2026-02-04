const {Buffer} =require("buffer")

// const buff= Buffer.alloc(10,1)

// console.log(buff)



// const buf=Buffer.from("Hello from Nodejs");
// console.log(buf)
// console.log(buf.toString())


// const buf=Buffer.alloc(10);
// buf.write("Hello")
// console.log(buf.toString())



// const buf=Buffer.alloc(10);
// buf.write("Hello")
// console.log(buf.toString("utf8",0,4))


const buf=Buffer.from("Chai");
console.log(buf)
buf[0]=0x4a
console.log(buf)
console.log(buf[0])
console.log(buf.toString())