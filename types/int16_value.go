// Generated by: main
// TypeWriter: value
// Directive: +gen on Int16

package types

import (
	. "github.com/attic-labs/noms/dbg"
	"github.com/attic-labs/noms/ref"
)

// DO NOT EDIT
//
// This file was generated by a tool.
// See http://clipperhouse.github.io/gen for details.

func (self Int16) Equals(other Value) bool {
	if other, ok := other.(Int16); ok {
		return self == other
	} else {
		return false
	}
}

func (v Int16) Ref() ref.Ref {
	Chk.NotNil(Reffer, "Somebody forgot to call SetReffer")
	return Reffer(v)
}