// This file was generated by nomdl/codegen.
// @flow
// eslint-disable max-len

import * as _noms from '@attic/noms';

{
  const pkg = new _noms.Package([
    _noms.makeStructType('StructWithUnionField',
      [
        new _noms.Field('a', _noms.float32Type, false),
      ],
      [
        new _noms.Field('b', _noms.float64Type, false),
        new _noms.Field('c', _noms.stringType, false),
        new _noms.Field('d', _noms.blobType, false),
        new _noms.Field('e', _noms.valueType, false),
        new _noms.Field('f', _noms.makeCompoundType(_noms.Kind.Set, _noms.uint8Type), false),
      ]
    ),
  ], [
  ]);
  _noms.registerPackage(pkg);
}

// struct.tmpl
// set.tmpl