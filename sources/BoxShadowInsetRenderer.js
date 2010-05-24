/**
 * Renderer for inset box-shadows
 * @constructor
 * @param {Element} el The target element
 * @param {Object} styleInfos The StyleInfo objects
 * @param {PIE.RootRenderer} parent
 */
PIE.BoxShadowInsetRenderer = (function() {
    function BoxShadowInsetRenderer( el, styleInfos, parent ) {
        this.element = el;
        this.styleInfos = styleInfos;
        this.parent = parent;
    }
    PIE.Util.merge( BoxShadowInsetRenderer.prototype, PIE.RendererBase, {

        zIndex: 3,
        boxName: 'inset-box-shadow',

        needsUpdate: function() {
            var si = this.styleInfos;
            return si.boxShadowInfo.changed() || si.borderRadiusInfo.changed();
        },

        isActive: function() {
            var boxShadowInfo = this.styleInfos.boxShadowInfo;
            return boxShadowInfo.isActive() && boxShadowInfo.getProps().inset[0];
        },

        updateSize: function() {
            // TODO
        },

        updateProps: function() {
            // TODO
        }

    } );

    return BoxShadowInsetRenderer;
})();