#!/bin/bash

for i in {0..4999}; do
	mx=60;my=60;head -c "$((3*mx*my))" /dev/urandom | convert -depth 8 -size "${mx}x${my}" RGB:- image$i.jpeg
done
