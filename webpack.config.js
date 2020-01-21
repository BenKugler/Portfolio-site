import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin';

export const plugins = [
    new VuetifyLoaderPlugin()
];
export const rules = [
    {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    },
    {
        test: /\.wasm$/,
        type: "webassembly/experimental"
    },
    {
        test: /\.s(c|a)ss$/,
        use: [
            'vue-style-loader',
            'css-loader',
            {
                loader: 'sass-loader',
                // Requires sass-loader@^7.0.0
                options: {
                    implementation: require('sass'),
                    fiber: require('fibers'),
                    indentedSyntax: true // optional
                },
                // Requires sass-loader@^8.0.0
                options: {
                    implementation: require('sass'),
                    sassOptions: {
                        fiber: require('fibers'),
                        indentedSyntax: true // optional
                    },
                },
            },
        ],
    },
];
export const resolve = {
    extensions: ['.tsx', '.ts', '.js', '.wasm']
};