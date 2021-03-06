# Lucy b2 [![Build Status](https://travis-ci.org/lucidogen/lucy-b2.svg)](https://travis-ci.org/lucidogen/lucy-b2)

Box2D by [Erin Catto](http://www.gphysics.com) with google's particle simulation
[liquidfun](http://google.github.io/liquidfun/) for node.js.

## This fork

Fork from [box2d.js](https://github.com/flyover/box2d.js).

Due to the fact that we are not creating sub-classes of C++ classes, we do not
need to use 'b2' prefix to separate namespaces so this prefix has been removed.

  ```js
  // Instead of writing box2d.b2Vec2
  // Write this:
  const b2 = require ( 'lucy-b2' )
  let gravity = new b2.Vec2  ( 0, -9.8 )
  let world   = new b2.World ( gravity )
  // ...
  let shape = new b2.PolygonShape
  ```

## Documentation

  * [Programmer's guide](https://google.github.io/liquidfun/Programmers-Guide/html/index.html)
  * [liquidfun API](http://google.github.io/liquidfun/API-Ref/html/annotated.html)

## Example
  Here is a falling ball simulation.

  ```js
  'use strict'
  const b2 = require ( 'lucy-b2' )

  // Create world
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
  for ( let i = 0; i < 10; i++ )
  { world.Step ( 1/60, 10, 10 )
    console.log ( body.GetPosition ().y )
  }
  ```

## Installation

  ```Shell
  npm install lucy-b2 --save
  ```

## Tests

  ```Shell
  npm test
  ```

## Contributing

Please see [box2d.js](https://github.com/flyover/box2d.js) for contributions.
The port from this library is just a few Regexp executed on the minified JS
version and a wrapper for node.js.

Please use ['jessy style'](http://github.com/lucidogen/jessy) if you want to
write some unit tests for [lucy-b2](https://github.com/lucidogen/lucy-b2)...

## Release History

  * 1.0.1 (2015-09-22) Fixed readme.
  * 1.0.0 (2015-09-09) Initial release.
