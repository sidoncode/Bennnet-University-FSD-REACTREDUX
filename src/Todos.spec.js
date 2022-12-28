import todos from "./Todos";

describe('todos reducer',() =>{

    it('should handle initial state',() => {

        expect(
            todos(undefined,{})).toEqual([])
        )
    })


    it('should handle ADD_TODO',() =>{
        expect(
            todos([],{
                type:'ADD_TODO',
                text:'Run the Tests',
                id:0
            })
        ).toEqual([
            {
                text:'Run the Tests',
                completed:false,
                id:0
            }
        ])



        expect( {
            text:'Run the Tests',
            completed:false,
            id:0
        }
           
        ).toEqual([
           
            todos([],{
                type:'ADD_TODO',
                text:'Run the Tests',
                id:0
            })
        ])


        
        expect( {
            text:'USE_REDUX',
            completed:false,
            id:1
        }
           
        ).toEqual([
           
            todos([],{
                type:'ADD_TODO',
                text:'fix the Tests',
                id:2
            })
        ])


        it('should handle TOGGLE_TODO',() =>{
            expect(
                todos([
                    {
                        text:'Run the Tests',
                        completed:false,
                        id:1
                    },{
                        text:'Use Redux',
                        completed:false,
                        id:1
                    },
                ],{

                    type:'TOGGLE_TODO',
                    id:1
                })
            ).toEqual([
                {
                    text:'Run the Tests',
                    completed:true,
                    id:1
                },{
                    text:'use Redux',
                    completed:false,
                    id:0
                }
            ])
        })
    })
})