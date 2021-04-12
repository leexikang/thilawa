package auth

import (
	"encoding/base64"
	"encoding/json"

	"github.com/docker/libtrust"
)

type JWTToken struct {
	Header  string
	Payload string
	pk      libtrust.PublicKey
	prk     libtrust.PrivateKey
}

func newJWTTOKEN(pk libtrust.PublicKey, prk libtrust.PrivateKey) *JWTToken {
	return &JWTToken{
		pk:  pk,
		prk: prk,
	}
}

func (token *JWTToken) getHeader() (string, error) {
	header := map[string]string{
		"typ": "min",
	}
	data, err := json.Marshal(header)
	if err != nil {
		return "", err
	}
	encoded := base64.StdEncoding.EncodeToString(data)
	return encoded, nil
}
