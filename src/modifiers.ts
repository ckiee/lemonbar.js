import { ILemonbarModifier, IToString } from "./util"
class SwapColorsModifier implements ILemonbarModifier {
    readonly name = "SwapColors"
    readonly generateRemoval = "%{-R}" 
    generate() {
        return "%{R}"
    }
}
class LeftSideModifier implements ILemonbarModifier {
    readonly name = "LeftSide"
    readonly generateRemoval = "%{-l}" 
    generate() {
        return "%{l}"
    }
}
class CenterModifier implements ILemonbarModifier {
    readonly name = "Center"
    readonly generateRemoval = "%{-c}" 
    generate() {
        return "%{c}"
    }
}
class RightModifier implements ILemonbarModifier {
    readonly name = "Right"
    readonly generateRemoval = "%{-r}" 
    generate() {
        return "%{r}"
    }
}
class OffsetWidthModifier implements ILemonbarModifier {
    readonly name = "OffsetWidth"
    readonly generateRemoval = "%{-O}" 
    // TODO: Introduce generics into modifiers so this can be a `number` and not a `string`
    generate<T extends IToString>(arg: T) {
        return `%{O${arg.toString()}}`
    }
}

export default [SwapColorsModifier, LeftSideModifier, CenterModifier, RightModifier, OffsetWidthModifier];