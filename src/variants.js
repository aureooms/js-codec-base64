import { enumerate } from '@aureooms/js-itertools' ;

import { object , reflect } from '@aureooms/js-mapping' ;

const variants = {

	// standard
	'RFC4648' : {
		'alphabet' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/' ,
		'padding' : '=' ,
	} ,

	// unpadded base64url
	'RFC7515' : {
		'alphabet' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_' ,
		'padding' : false ,
	} ,

	// YUI library
	'Y64' : {
		'alphabet' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._' ,
		'padding' : '-' ,
	} ,

	// IMAP mailbox names
	'RFC3501' : {
		'alphabet' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+,' ,
		'padding' : false ,
	} ,

} ;

for ( const variant in variants ) {
	variants[variant].index = object( reflect( enumerate( variants[variant].alphabet ) ) ) ;
}

export default variants ;
