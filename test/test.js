'use strict'

require ( 'chai' )
.should ()
const b2 = require ( '../index' )

describe
( 'simulation'
, function ()
  { 
    it
    ( 'should run simulation'
    , function ()
      { // Create world
        let gravity = new b2.Vec2  ( 0, -9.8 )
        let world   = new b2.World ( gravity )

        // Define body
        let bodyDef = new b2.BodyDef
        bodyDef.type = b2.BodyType.dynamicBody

        // Create body with definition
        let body = world.CreateBody ( bodyDef )

        // Define fixture
        let fixDef = new b2.FixtureDef
        fixDef.density     = 1.0
        fixDef.friction    = 0.2
        fixDef.restitution = 0.8

        let shape = new b2.PolygonShape
        shape.SetAsBox ( 0.1, 0.1 )

        fixDef.shape = shape

        // Create fixture
        body.CreateFixture ( fixDef )

        // Move body into initial position ( and rotation )
        body.SetTransform ( 0, 2, 0 )

        // Run simulation
        for ( let i = 0; i < 10; i++)
        { world.Step ( 1/60, 10, 10 )
        }
        Math.floor( body.GetPosition ().y * 1000 )
        .should.equal ( 1850 )
      }
    )

  }
)

describe
( 'b2.Vec2'
, function ()
  { 
    it
    ( 'should be 2D vector class'
    , function ()
      { let v = new b2.Vec2 ( 3, 4 )
        v.x
        .should.equal ( 3 )
        v.y
        .should.equal ( 4 )
      }
    )

    it
    ( 'should respond to methods'
    , function ()
      { let v = new b2.Vec2 ( 3, 4 )
        v.Length ()
        .should.equal ( 5 )

        v.Normalize ()
        v.Length ()
        .should.equal ( 1 )
      }
    )
  }
)

