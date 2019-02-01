export default {
  layout: {
    index: {
      name: 'layout',
      componet: require('./layout/layout'),
      children: [
        {
          name: 'one',
          componet: require('./one')
        },
        {
          name: 'two'
        },
        {
          name: 'three',
          children: [
            {
              name: '1',
              children: [
                {
                  name: '1-1'
                }
              ]
            },
            {
              name: '2'
            },
            {
              name: '3'
            }
          ]
        }
      ]
    },
    simple: require('./layout/simple-layout')
  }
}