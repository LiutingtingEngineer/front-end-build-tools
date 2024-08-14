import _ from 'lodash-es'
import { log } from "./logger";
import message from "./messages";
import {name, version} from "./package.json";
import cjs from './cjs-common'

const msg = message.hi

log(msg)
log(name)
log(version)
log(_.join(['Hello', 'webpack'], ' '))
log(cjs)


import('./logger').then(({err}) => {
    err('code splitting~')
})