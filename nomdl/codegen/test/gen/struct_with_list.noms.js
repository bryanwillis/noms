// This file was generated by nomdl/codegen.
// @flow
// eslint-disable max-len

import {
  Field as _Field,
  Kind as _Kind,
  Package as _Package,
  boolType as _boolType,
  int64Type as _int64Type,
  makeCompoundType as _makeCompoundType,
  makeStructType as _makeStructType,
  registerPackage as _registerPackage,
  stringType as _stringType,
  uint8Type as _uint8Type,
} from "@attic/noms";
import type {
  NomsList as _NomsList,
  Struct as _Struct,
  int64 as _int64,
  uint8 as _uint8,
} from "@attic/noms";

{
  const pkg = new _Package([
    _makeStructType('StructWithList',
      [
        new _Field('l', _makeCompoundType(_Kind.List, _uint8Type), false),
        new _Field('b', _boolType, false),
        new _Field('s', _stringType, false),
        new _Field('i', _int64Type, false),
      ],
      [

      ]
    ),
  ], [
  ]);
  _registerPackage(pkg);
}


export interface StructWithList extends _Struct {
  l: _NomsList<_uint8>;  // readonly
  setL(value: _NomsList<_uint8>): StructWithList;
  b: boolean;  // readonly
  setB(value: boolean): StructWithList;
  s: string;  // readonly
  setS(value: string): StructWithList;
  i: _int64;  // readonly
  setI(value: _int64): StructWithList;
}
