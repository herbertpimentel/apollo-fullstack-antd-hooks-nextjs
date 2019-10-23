import _ from "lodash";

export function getValue (obj, path) {
    return _.get(obj, path)
}