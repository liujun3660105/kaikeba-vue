function $broadcast(eventName, params) {
    this.$children.forEach(child => {
        child.$emit(eventName, params);
        if (child.$children.length) {
            $broadcast.call(child, eventName, params)
        }
    });
}

function $dispatch(componentName,eventName, params) {
    var parent = this.$parent;
    var name = parent.$options._componentTag;
    console.log(name);
    while (parent && name && name == componentName) {
        parent.$emit(eventName, params);
        parent = parent.$parent;
    }

}

export default {
    methods: {
        $dispatch,
        $broadcast
    }
}