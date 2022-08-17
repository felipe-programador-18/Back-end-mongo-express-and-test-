const some = require("./soma")

test("testing my soma", () =>{
   a=12
   b=32323
   const somaexpect = 32335
   const Receive = some.soma(a,b)
   expect(Receive).toBe(somaexpect)
})


test("testing split", () =>{
    a=10
    b=2
    const splitexpect = 5
    const ReceiveAnother = some.split(a,b)
    expect(ReceiveAnother).toBe(splitexpect) 

})


test("create multiple test", () => {
    a=30
    b=3
    const resultmultiple = 90
    const caughtSome = some.multiple(a,b)
    expect(caughtSome).toBe(resultmultiple)
})