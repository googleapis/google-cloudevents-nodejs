import * as $protobuf from "protobufjs";
/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Gets the default type url for DoubleValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Gets the default type url for FloatValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (number|Long|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|Long);

            /**
             * Gets the default type url for Int64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (number|Long|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|Long);

            /**
             * Gets the default type url for UInt64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Gets the default type url for Int32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Gets the default type url for UInt32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Gets the default type url for BoolValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Gets the default type url for StringValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: Uint8Array;

            /**
             * Gets the default type url for BytesValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Type. */
        interface IType {

            /** Type name */
            name?: (string|null);

            /** Type fields */
            fields?: (google.protobuf.IField[]|null);

            /** Type oneofs */
            oneofs?: (string[]|null);

            /** Type options */
            options?: (google.protobuf.IOption[]|null);

            /** Type sourceContext */
            sourceContext?: (google.protobuf.ISourceContext|null);

            /** Type syntax */
            syntax?: (google.protobuf.Syntax|null);
        }

        /** Represents a Type. */
        class Type implements IType {

            /**
             * Constructs a new Type.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IType);

            /** Type name. */
            public name: string;

            /** Type fields. */
            public fields: google.protobuf.IField[];

            /** Type oneofs. */
            public oneofs: string[];

            /** Type options. */
            public options: google.protobuf.IOption[];

            /** Type sourceContext. */
            public sourceContext?: (google.protobuf.ISourceContext|null);

            /** Type syntax. */
            public syntax: google.protobuf.Syntax;

            /**
             * Gets the default type url for Type
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Field. */
        interface IField {

            /** Field kind */
            kind?: (google.protobuf.Field.Kind|null);

            /** Field cardinality */
            cardinality?: (google.protobuf.Field.Cardinality|null);

            /** Field number */
            number?: (number|null);

            /** Field name */
            name?: (string|null);

            /** Field typeUrl */
            typeUrl?: (string|null);

            /** Field oneofIndex */
            oneofIndex?: (number|null);

            /** Field packed */
            packed?: (boolean|null);

            /** Field options */
            options?: (google.protobuf.IOption[]|null);

            /** Field jsonName */
            jsonName?: (string|null);

            /** Field defaultValue */
            defaultValue?: (string|null);
        }

        /** Represents a Field. */
        class Field implements IField {

            /**
             * Constructs a new Field.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IField);

            /** Field kind. */
            public kind: google.protobuf.Field.Kind;

            /** Field cardinality. */
            public cardinality: google.protobuf.Field.Cardinality;

            /** Field number. */
            public number: number;

            /** Field name. */
            public name: string;

            /** Field typeUrl. */
            public typeUrl: string;

            /** Field oneofIndex. */
            public oneofIndex: number;

            /** Field packed. */
            public packed: boolean;

            /** Field options. */
            public options: google.protobuf.IOption[];

            /** Field jsonName. */
            public jsonName: string;

            /** Field defaultValue. */
            public defaultValue: string;

            /**
             * Gets the default type url for Field
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Field {

            /** Kind enum. */
            enum Kind {
                TYPE_UNKNOWN = 0,
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Cardinality enum. */
            enum Cardinality {
                CARDINALITY_UNKNOWN = 0,
                CARDINALITY_OPTIONAL = 1,
                CARDINALITY_REQUIRED = 2,
                CARDINALITY_REPEATED = 3
            }
        }

        /** Properties of an Enum. */
        interface IEnum {

            /** Enum name */
            name?: (string|null);

            /** Enum enumvalue */
            enumvalue?: (google.protobuf.IEnumValue[]|null);

            /** Enum options */
            options?: (google.protobuf.IOption[]|null);

            /** Enum sourceContext */
            sourceContext?: (google.protobuf.ISourceContext|null);

            /** Enum syntax */
            syntax?: (google.protobuf.Syntax|null);
        }

        /** Represents an Enum. */
        class Enum implements IEnum {

            /**
             * Constructs a new Enum.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnum);

            /** Enum name. */
            public name: string;

            /** Enum enumvalue. */
            public enumvalue: google.protobuf.IEnumValue[];

            /** Enum options. */
            public options: google.protobuf.IOption[];

            /** Enum sourceContext. */
            public sourceContext?: (google.protobuf.ISourceContext|null);

            /** Enum syntax. */
            public syntax: google.protobuf.Syntax;

            /**
             * Gets the default type url for Enum
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumValue. */
        interface IEnumValue {

            /** EnumValue name */
            name?: (string|null);

            /** EnumValue number */
            number?: (number|null);

            /** EnumValue options */
            options?: (google.protobuf.IOption[]|null);
        }

        /** Represents an EnumValue. */
        class EnumValue implements IEnumValue {

            /**
             * Constructs a new EnumValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValue);

            /** EnumValue name. */
            public name: string;

            /** EnumValue number. */
            public number: number;

            /** EnumValue options. */
            public options: google.protobuf.IOption[];

            /**
             * Gets the default type url for EnumValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Option. */
        interface IOption {

            /** Option name */
            name?: (string|null);

            /** Option value */
            value?: (google.protobuf.IAny|null);
        }

        /** Represents an Option. */
        class Option implements IOption {

            /**
             * Constructs a new Option.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOption);

            /** Option name. */
            public name: string;

            /** Option value. */
            public value?: (google.protobuf.IAny|null);

            /**
             * Gets the default type url for Option
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Syntax enum. */
        enum Syntax {
            SYNTAX_PROTO2 = 0,
            SYNTAX_PROTO3 = 1
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Gets the default type url for Any
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Gets the default type url for Struct
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue?: (google.protobuf.NullValue|null);

            /** Value numberValue. */
            public numberValue?: (number|null);

            /** Value stringValue. */
            public stringValue?: (string|null);

            /** Value boolValue. */
            public boolValue?: (boolean|null);

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Gets the default type url for Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** NullValue enum. */
        enum NullValue {
            NULL_VALUE = 0
        }

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Gets the default type url for ListValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SourceContext. */
        interface ISourceContext {

            /** SourceContext fileName */
            fileName?: (string|null);
        }

        /** Represents a SourceContext. */
        class SourceContext implements ISourceContext {

            /**
             * Constructs a new SourceContext.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceContext);

            /** SourceContext fileName. */
            public fileName: string;

            /**
             * Gets the default type url for SourceContext
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Gets the default type url for FieldMask
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Gets the default type url for Empty
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Gets the default type url for Duration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Gets the default type url for FileDescriptorSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Gets the default type url for FileDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Gets the default type url for DescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Gets the default type url for ExtensionRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Gets the default type url for ReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Gets the default type url for ExtensionRangeOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Gets the default type url for FieldDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Gets the default type url for OneofDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Gets the default type url for EnumDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Gets the default type url for EnumReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Gets the default type url for MethodDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.events.cloudEventProduct */
            ".google.events.cloudEventProduct"?: (string|null);

            /** FileOptions .google.events.cloudEventExtensionAttribute */
            ".google.events.cloudEventExtensionAttribute"?: (google.events.IExtensionAttribute[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Gets the default type url for FileOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.events.cloudEventType */
            ".google.events.cloudEventType"?: (string|null);

            /** MessageOptions .google.events.cloudEventExtensionName */
            ".google.events.cloudEventExtensionName"?: (string[]|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Gets the default type url for MessageOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions unverifiedLazy */
            unverifiedLazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions unverifiedLazy. */
            public unverifiedLazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Gets the default type url for FieldOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Gets the default type url for OneofOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Gets the default type url for EnumOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Gets the default type url for EnumValueOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Gets the default type url for ServiceOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: google.protobuf.MethodOptions.IdempotencyLevel;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Gets the default type url for MethodOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Gets the default type url for UninterpretedOption
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Gets the default type url for NamePart
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Gets the default type url for SourceCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Gets the default type url for Location
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Gets the default type url for GeneratedCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Gets the default type url for Annotation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Namespace compiler. */
        namespace compiler {

            /** Properties of a Version. */
            interface IVersion {

                /** Version major */
                major?: (number|null);

                /** Version minor */
                minor?: (number|null);

                /** Version patch */
                patch?: (number|null);

                /** Version suffix */
                suffix?: (string|null);
            }

            /** Represents a Version. */
            class Version implements IVersion {

                /**
                 * Constructs a new Version.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.compiler.IVersion);

                /** Version major. */
                public major: number;

                /** Version minor. */
                public minor: number;

                /** Version patch. */
                public patch: number;

                /** Version suffix. */
                public suffix: string;

                /**
                 * Gets the default type url for Version
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CodeGeneratorRequest. */
            interface ICodeGeneratorRequest {

                /** CodeGeneratorRequest fileToGenerate */
                fileToGenerate?: (string[]|null);

                /** CodeGeneratorRequest parameter */
                parameter?: (string|null);

                /** CodeGeneratorRequest protoFile */
                protoFile?: (google.protobuf.IFileDescriptorProto[]|null);

                /** CodeGeneratorRequest compilerVersion */
                compilerVersion?: (google.protobuf.compiler.IVersion|null);
            }

            /** Represents a CodeGeneratorRequest. */
            class CodeGeneratorRequest implements ICodeGeneratorRequest {

                /**
                 * Constructs a new CodeGeneratorRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.compiler.ICodeGeneratorRequest);

                /** CodeGeneratorRequest fileToGenerate. */
                public fileToGenerate: string[];

                /** CodeGeneratorRequest parameter. */
                public parameter: string;

                /** CodeGeneratorRequest protoFile. */
                public protoFile: google.protobuf.IFileDescriptorProto[];

                /** CodeGeneratorRequest compilerVersion. */
                public compilerVersion?: (google.protobuf.compiler.IVersion|null);

                /**
                 * Gets the default type url for CodeGeneratorRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CodeGeneratorResponse. */
            interface ICodeGeneratorResponse {

                /** CodeGeneratorResponse error */
                error?: (string|null);

                /** CodeGeneratorResponse supportedFeatures */
                supportedFeatures?: (number|Long|null);

                /** CodeGeneratorResponse file */
                file?: (google.protobuf.compiler.CodeGeneratorResponse.IFile[]|null);
            }

            /** Represents a CodeGeneratorResponse. */
            class CodeGeneratorResponse implements ICodeGeneratorResponse {

                /**
                 * Constructs a new CodeGeneratorResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.compiler.ICodeGeneratorResponse);

                /** CodeGeneratorResponse error. */
                public error: string;

                /** CodeGeneratorResponse supportedFeatures. */
                public supportedFeatures: (number|Long);

                /** CodeGeneratorResponse file. */
                public file: google.protobuf.compiler.CodeGeneratorResponse.IFile[];

                /**
                 * Gets the default type url for CodeGeneratorResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace CodeGeneratorResponse {

                /** Feature enum. */
                enum Feature {
                    FEATURE_NONE = 0,
                    FEATURE_PROTO3_OPTIONAL = 1
                }

                /** Properties of a File. */
                interface IFile {

                    /** File name */
                    name?: (string|null);

                    /** File insertionPoint */
                    insertionPoint?: (string|null);

                    /** File content */
                    content?: (string|null);

                    /** File generatedCodeInfo */
                    generatedCodeInfo?: (google.protobuf.IGeneratedCodeInfo|null);
                }

                /** Represents a File. */
                class File implements IFile {

                    /**
                     * Constructs a new File.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.protobuf.compiler.CodeGeneratorResponse.IFile);

                    /** File name. */
                    public name: string;

                    /** File insertionPoint. */
                    public insertionPoint: string;

                    /** File content. */
                    public content: string;

                    /** File generatedCodeInfo. */
                    public generatedCodeInfo?: (google.protobuf.IGeneratedCodeInfo|null);

                    /**
                     * Gets the default type url for File
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }

        /** Properties of an Api. */
        interface IApi {

            /** Api name */
            name?: (string|null);

            /** Api methods */
            methods?: (google.protobuf.IMethod[]|null);

            /** Api options */
            options?: (google.protobuf.IOption[]|null);

            /** Api version */
            version?: (string|null);

            /** Api sourceContext */
            sourceContext?: (google.protobuf.ISourceContext|null);

            /** Api mixins */
            mixins?: (google.protobuf.IMixin[]|null);

            /** Api syntax */
            syntax?: (google.protobuf.Syntax|null);
        }

        /** Represents an Api. */
        class Api implements IApi {

            /**
             * Constructs a new Api.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IApi);

            /** Api name. */
            public name: string;

            /** Api methods. */
            public methods: google.protobuf.IMethod[];

            /** Api options. */
            public options: google.protobuf.IOption[];

            /** Api version. */
            public version: string;

            /** Api sourceContext. */
            public sourceContext?: (google.protobuf.ISourceContext|null);

            /** Api mixins. */
            public mixins: google.protobuf.IMixin[];

            /** Api syntax. */
            public syntax: google.protobuf.Syntax;

            /**
             * Gets the default type url for Api
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Method. */
        interface IMethod {

            /** Method name */
            name?: (string|null);

            /** Method requestTypeUrl */
            requestTypeUrl?: (string|null);

            /** Method requestStreaming */
            requestStreaming?: (boolean|null);

            /** Method responseTypeUrl */
            responseTypeUrl?: (string|null);

            /** Method responseStreaming */
            responseStreaming?: (boolean|null);

            /** Method options */
            options?: (google.protobuf.IOption[]|null);

            /** Method syntax */
            syntax?: (google.protobuf.Syntax|null);
        }

        /** Represents a Method. */
        class Method implements IMethod {

            /**
             * Constructs a new Method.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethod);

            /** Method name. */
            public name: string;

            /** Method requestTypeUrl. */
            public requestTypeUrl: string;

            /** Method requestStreaming. */
            public requestStreaming: boolean;

            /** Method responseTypeUrl. */
            public responseTypeUrl: string;

            /** Method responseStreaming. */
            public responseStreaming: boolean;

            /** Method options. */
            public options: google.protobuf.IOption[];

            /** Method syntax. */
            public syntax: google.protobuf.Syntax;

            /**
             * Gets the default type url for Method
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Mixin. */
        interface IMixin {

            /** Mixin name */
            name?: (string|null);

            /** Mixin root */
            root?: (string|null);
        }

        /** Represents a Mixin. */
        class Mixin implements IMixin {

            /**
             * Constructs a new Mixin.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMixin);

            /** Mixin name. */
            public name: string;

            /** Mixin root. */
            public root: string;

            /**
             * Gets the default type url for Mixin
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace events. */
    namespace events {

        /** Namespace firebase. */
        namespace firebase {

            /** Namespace testlab. */
            namespace testlab {

                /** Namespace v1. */
                namespace v1 {

                    /** Properties of a TestMatrixCompletedEvent. */
                    interface ITestMatrixCompletedEvent {

                        /** TestMatrixCompletedEvent data */
                        data?: (google.events.firebase.testlab.v1.ITestMatrixEventData|null);
                    }

                    /** Represents a TestMatrixCompletedEvent. */
                    class TestMatrixCompletedEvent implements ITestMatrixCompletedEvent {

                        /**
                         * Constructs a new TestMatrixCompletedEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.testlab.v1.ITestMatrixCompletedEvent);

                        /** TestMatrixCompletedEvent data. */
                        public data?: (google.events.firebase.testlab.v1.ITestMatrixEventData|null);

                        /**
                         * Gets the default type url for TestMatrixCompletedEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TestMatrixEventData. */
                    interface ITestMatrixEventData {

                        /** TestMatrixEventData createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** TestMatrixEventData state */
                        state?: (google.events.firebase.testlab.v1.TestState|null);

                        /** TestMatrixEventData invalidMatrixDetails */
                        invalidMatrixDetails?: (string|null);

                        /** TestMatrixEventData outcomeSummary */
                        outcomeSummary?: (google.events.firebase.testlab.v1.OutcomeSummary|null);

                        /** TestMatrixEventData resultStorage */
                        resultStorage?: (google.events.firebase.testlab.v1.IResultStorage|null);

                        /** TestMatrixEventData clientInfo */
                        clientInfo?: (google.events.firebase.testlab.v1.IClientInfo|null);

                        /** TestMatrixEventData testMatrixId */
                        testMatrixId?: (string|null);
                    }

                    /** Represents a TestMatrixEventData. */
                    class TestMatrixEventData implements ITestMatrixEventData {

                        /**
                         * Constructs a new TestMatrixEventData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.testlab.v1.ITestMatrixEventData);

                        /** TestMatrixEventData createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** TestMatrixEventData state. */
                        public state: google.events.firebase.testlab.v1.TestState;

                        /** TestMatrixEventData invalidMatrixDetails. */
                        public invalidMatrixDetails: string;

                        /** TestMatrixEventData outcomeSummary. */
                        public outcomeSummary: google.events.firebase.testlab.v1.OutcomeSummary;

                        /** TestMatrixEventData resultStorage. */
                        public resultStorage?: (google.events.firebase.testlab.v1.IResultStorage|null);

                        /** TestMatrixEventData clientInfo. */
                        public clientInfo?: (google.events.firebase.testlab.v1.IClientInfo|null);

                        /** TestMatrixEventData testMatrixId. */
                        public testMatrixId: string;

                        /**
                         * Gets the default type url for TestMatrixEventData
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ClientInfo. */
                    interface IClientInfo {

                        /** ClientInfo client */
                        client?: (string|null);

                        /** ClientInfo details */
                        details?: ({ [k: string]: string }|null);
                    }

                    /** Represents a ClientInfo. */
                    class ClientInfo implements IClientInfo {

                        /**
                         * Constructs a new ClientInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.testlab.v1.IClientInfo);

                        /** ClientInfo client. */
                        public client: string;

                        /** ClientInfo details. */
                        public details: { [k: string]: string };

                        /**
                         * Gets the default type url for ClientInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ResultStorage. */
                    interface IResultStorage {

                        /** ResultStorage toolResultsHistory */
                        toolResultsHistory?: (string|null);

                        /** ResultStorage toolResultsExecution */
                        toolResultsExecution?: (string|null);

                        /** ResultStorage resultsUri */
                        resultsUri?: (string|null);

                        /** ResultStorage gcsPath */
                        gcsPath?: (string|null);
                    }

                    /** Represents a ResultStorage. */
                    class ResultStorage implements IResultStorage {

                        /**
                         * Constructs a new ResultStorage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.testlab.v1.IResultStorage);

                        /** ResultStorage toolResultsHistory. */
                        public toolResultsHistory: string;

                        /** ResultStorage toolResultsExecution. */
                        public toolResultsExecution: string;

                        /** ResultStorage resultsUri. */
                        public resultsUri: string;

                        /** ResultStorage gcsPath. */
                        public gcsPath: string;

                        /**
                         * Gets the default type url for ResultStorage
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** TestState enum. */
                    enum TestState {
                        TEST_STATE_UNSPECIFIED = 0,
                        VALIDATING = 1,
                        PENDING = 2,
                        FINISHED = 3,
                        ERROR = 4,
                        INVALID = 5
                    }

                    /** OutcomeSummary enum. */
                    enum OutcomeSummary {
                        OUTCOME_SUMMARY_UNSPECIFIED = 0,
                        SUCCESS = 1,
                        FAILURE = 2,
                        INCONCLUSIVE = 3,
                        SKIPPED = 4
                    }
                }
            }

            /** Namespace remoteconfig. */
            namespace remoteconfig {

                /** Namespace v1. */
                namespace v1 {

                    /** Properties of a RemoteConfigUpdatedEvent. */
                    interface IRemoteConfigUpdatedEvent {

                        /** RemoteConfigUpdatedEvent data */
                        data?: (google.events.firebase.remoteconfig.v1.IRemoteConfigEventData|null);
                    }

                    /** Represents a RemoteConfigUpdatedEvent. */
                    class RemoteConfigUpdatedEvent implements IRemoteConfigUpdatedEvent {

                        /**
                         * Constructs a new RemoteConfigUpdatedEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.remoteconfig.v1.IRemoteConfigUpdatedEvent);

                        /** RemoteConfigUpdatedEvent data. */
                        public data?: (google.events.firebase.remoteconfig.v1.IRemoteConfigEventData|null);

                        /**
                         * Gets the default type url for RemoteConfigUpdatedEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RemoteConfigEventData. */
                    interface IRemoteConfigEventData {

                        /** RemoteConfigEventData versionNumber */
                        versionNumber?: (number|Long|null);

                        /** RemoteConfigEventData updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);

                        /** RemoteConfigEventData updateUser */
                        updateUser?: (google.events.firebase.remoteconfig.v1.IRemoteConfigUser|null);

                        /** RemoteConfigEventData description */
                        description?: (string|null);

                        /** RemoteConfigEventData updateOrigin */
                        updateOrigin?: (google.events.firebase.remoteconfig.v1.RemoteConfigUpdateOrigin|null);

                        /** RemoteConfigEventData updateType */
                        updateType?: (google.events.firebase.remoteconfig.v1.RemoteConfigUpdateType|null);

                        /** RemoteConfigEventData rollbackSource */
                        rollbackSource?: (number|Long|null);
                    }

                    /** Represents a RemoteConfigEventData. */
                    class RemoteConfigEventData implements IRemoteConfigEventData {

                        /**
                         * Constructs a new RemoteConfigEventData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.remoteconfig.v1.IRemoteConfigEventData);

                        /** RemoteConfigEventData versionNumber. */
                        public versionNumber: (number|Long);

                        /** RemoteConfigEventData updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /** RemoteConfigEventData updateUser. */
                        public updateUser?: (google.events.firebase.remoteconfig.v1.IRemoteConfigUser|null);

                        /** RemoteConfigEventData description. */
                        public description: string;

                        /** RemoteConfigEventData updateOrigin. */
                        public updateOrigin: google.events.firebase.remoteconfig.v1.RemoteConfigUpdateOrigin;

                        /** RemoteConfigEventData updateType. */
                        public updateType: google.events.firebase.remoteconfig.v1.RemoteConfigUpdateType;

                        /** RemoteConfigEventData rollbackSource. */
                        public rollbackSource: (number|Long);

                        /**
                         * Gets the default type url for RemoteConfigEventData
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RemoteConfigUser. */
                    interface IRemoteConfigUser {

                        /** RemoteConfigUser name */
                        name?: (string|null);

                        /** RemoteConfigUser email */
                        email?: (string|null);

                        /** RemoteConfigUser imageUrl */
                        imageUrl?: (string|null);
                    }

                    /** Represents a RemoteConfigUser. */
                    class RemoteConfigUser implements IRemoteConfigUser {

                        /**
                         * Constructs a new RemoteConfigUser.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.remoteconfig.v1.IRemoteConfigUser);

                        /** RemoteConfigUser name. */
                        public name: string;

                        /** RemoteConfigUser email. */
                        public email: string;

                        /** RemoteConfigUser imageUrl. */
                        public imageUrl: string;

                        /**
                         * Gets the default type url for RemoteConfigUser
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** RemoteConfigUpdateOrigin enum. */
                    enum RemoteConfigUpdateOrigin {
                        REMOTE_CONFIG_UPDATE_ORIGIN_UNSPECIFIED = 0,
                        CONSOLE = 1,
                        REST_API = 2,
                        ADMIN_SDK_NODE = 3
                    }

                    /** RemoteConfigUpdateType enum. */
                    enum RemoteConfigUpdateType {
                        REMOTE_CONFIG_UPDATE_TYPE_UNSPECIFIED = 0,
                        INCREMENTAL_UPDATE = 1,
                        FORCED_UPDATE = 2,
                        ROLLBACK = 3
                    }
                }
            }

            /** Namespace firebasealerts. */
            namespace firebasealerts {

                /** Namespace v1. */
                namespace v1 {

                    /** Properties of an AlertPublishedEvent. */
                    interface IAlertPublishedEvent {

                        /** AlertPublishedEvent data */
                        data?: (google.events.firebase.firebasealerts.v1.IAlertData|null);
                    }

                    /** Represents an AlertPublishedEvent. */
                    class AlertPublishedEvent implements IAlertPublishedEvent {

                        /**
                         * Constructs a new AlertPublishedEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.firebasealerts.v1.IAlertPublishedEvent);

                        /** AlertPublishedEvent data. */
                        public data?: (google.events.firebase.firebasealerts.v1.IAlertData|null);

                        /**
                         * Gets the default type url for AlertPublishedEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AlertData. */
                    interface IAlertData {

                        /** AlertData createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** AlertData endTime */
                        endTime?: (google.protobuf.ITimestamp|null);

                        /** AlertData payload */
                        payload?: (google.protobuf.IStruct|null);
                    }

                    /** Represents an AlertData. */
                    class AlertData implements IAlertData {

                        /**
                         * Constructs a new AlertData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.firebasealerts.v1.IAlertData);

                        /** AlertData createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** AlertData endTime. */
                        public endTime?: (google.protobuf.ITimestamp|null);

                        /** AlertData payload. */
                        public payload?: (google.protobuf.IStruct|null);

                        /**
                         * Gets the default type url for AlertData
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CrashlyticsIssue. */
                    interface ICrashlyticsIssue {

                        /** CrashlyticsIssue id */
                        id?: (string|null);

                        /** CrashlyticsIssue title */
                        title?: (string|null);

                        /** CrashlyticsIssue subtitle */
                        subtitle?: (string|null);

                        /** CrashlyticsIssue appVersion */
                        appVersion?: (string|null);
                    }

                    /** Represents a CrashlyticsIssue. */
                    class CrashlyticsIssue implements ICrashlyticsIssue {

                        /**
                         * Constructs a new CrashlyticsIssue.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.firebasealerts.v1.ICrashlyticsIssue);

                        /** CrashlyticsIssue id. */
                        public id: string;

                        /** CrashlyticsIssue title. */
                        public title: string;

                        /** CrashlyticsIssue subtitle. */
                        public subtitle: string;

                        /** CrashlyticsIssue appVersion. */
                        public appVersion: string;

                        /**
                         * Gets the default type url for CrashlyticsIssue
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CrashlyticsNewFatalIssuePayload. */
                    interface ICrashlyticsNewFatalIssuePayload {

                        /** CrashlyticsNewFatalIssuePayload issue */
                        issue?: (google.events.firebase.firebasealerts.v1.ICrashlyticsIssue|null);
                    }

                    /** Represents a CrashlyticsNewFatalIssuePayload. */
                    class CrashlyticsNewFatalIssuePayload implements ICrashlyticsNewFatalIssuePayload {

                        /**
                         * Constructs a new CrashlyticsNewFatalIssuePayload.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.firebasealerts.v1.ICrashlyticsNewFatalIssuePayload);

                        /** CrashlyticsNewFatalIssuePayload issue. */
                        public issue?: (google.events.firebase.firebasealerts.v1.ICrashlyticsIssue|null);

                        /**
                         * Gets the default type url for CrashlyticsNewFatalIssuePayload
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CrashlyticsNewNonfatalIssuePayload. */
                    interface ICrashlyticsNewNonfatalIssuePayload {

                        /** CrashlyticsNewNonfatalIssuePayload issue */
                        issue?: (google.events.firebase.firebasealerts.v1.ICrashlyticsIssue|null);
                    }

                    /** Represents a CrashlyticsNewNonfatalIssuePayload. */
                    class CrashlyticsNewNonfatalIssuePayload implements ICrashlyticsNewNonfatalIssuePayload {

                        /**
                         * Constructs a new CrashlyticsNewNonfatalIssuePayload.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.firebasealerts.v1.ICrashlyticsNewNonfatalIssuePayload);

                        /** CrashlyticsNewNonfatalIssuePayload issue. */
                        public issue?: (google.events.firebase.firebasealerts.v1.ICrashlyticsIssue|null);

                        /**
                         * Gets the default type url for CrashlyticsNewNonfatalIssuePayload
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CrashlyticsRegressionAlertPayload. */
                    interface ICrashlyticsRegressionAlertPayload {

                        /** CrashlyticsRegressionAlertPayload type */
                        type?: (string|null);

                        /** CrashlyticsRegressionAlertPayload issue */
                        issue?: (google.events.firebase.firebasealerts.v1.ICrashlyticsIssue|null);

                        /** CrashlyticsRegressionAlertPayload resolveTime */
                        resolveTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a CrashlyticsRegressionAlertPayload. */
                    class CrashlyticsRegressionAlertPayload implements ICrashlyticsRegressionAlertPayload {

                        /**
                         * Constructs a new CrashlyticsRegressionAlertPayload.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.firebasealerts.v1.ICrashlyticsRegressionAlertPayload);

                        /** CrashlyticsRegressionAlertPayload type. */
                        public type: string;

                        /** CrashlyticsRegressionAlertPayload issue. */
                        public issue?: (google.events.firebase.firebasealerts.v1.ICrashlyticsIssue|null);

                        /** CrashlyticsRegressionAlertPayload resolveTime. */
                        public resolveTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Gets the default type url for CrashlyticsRegressionAlertPayload
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CrashlyticsVelocityAlertPayload. */
                    interface ICrashlyticsVelocityAlertPayload {

                        /** CrashlyticsVelocityAlertPayload issue */
                        issue?: (google.events.firebase.firebasealerts.v1.ICrashlyticsIssue|null);

                        /** CrashlyticsVelocityAlertPayload createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** CrashlyticsVelocityAlertPayload crashCount */
                        crashCount?: (number|Long|null);

                        /** CrashlyticsVelocityAlertPayload crashPercentage */
                        crashPercentage?: (number|null);

                        /** CrashlyticsVelocityAlertPayload firstVersion */
                        firstVersion?: (string|null);
                    }

                    /** Represents a CrashlyticsVelocityAlertPayload. */
                    class CrashlyticsVelocityAlertPayload implements ICrashlyticsVelocityAlertPayload {

                        /**
                         * Constructs a new CrashlyticsVelocityAlertPayload.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.firebasealerts.v1.ICrashlyticsVelocityAlertPayload);

                        /** CrashlyticsVelocityAlertPayload issue. */
                        public issue?: (google.events.firebase.firebasealerts.v1.ICrashlyticsIssue|null);

                        /** CrashlyticsVelocityAlertPayload createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** CrashlyticsVelocityAlertPayload crashCount. */
                        public crashCount: (number|Long);

                        /** CrashlyticsVelocityAlertPayload crashPercentage. */
                        public crashPercentage: number;

                        /** CrashlyticsVelocityAlertPayload firstVersion. */
                        public firstVersion: string;

                        /**
                         * Gets the default type url for CrashlyticsVelocityAlertPayload
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CrashlyticsStabilityDigestPayload. */
                    interface ICrashlyticsStabilityDigestPayload {

                        /** CrashlyticsStabilityDigestPayload digestDate */
                        digestDate?: (google.type.IDate|null);

                        /** CrashlyticsStabilityDigestPayload trendingIssues */
                        trendingIssues?: (google.events.firebase.firebasealerts.v1.CrashlyticsStabilityDigestPayload.ITrendingIssueDetails[]|null);
                    }

                    /** Represents a CrashlyticsStabilityDigestPayload. */
                    class CrashlyticsStabilityDigestPayload implements ICrashlyticsStabilityDigestPayload {

                        /**
                         * Constructs a new CrashlyticsStabilityDigestPayload.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.firebasealerts.v1.ICrashlyticsStabilityDigestPayload);

                        /** CrashlyticsStabilityDigestPayload digestDate. */
                        public digestDate?: (google.type.IDate|null);

                        /** CrashlyticsStabilityDigestPayload trendingIssues. */
                        public trendingIssues: google.events.firebase.firebasealerts.v1.CrashlyticsStabilityDigestPayload.ITrendingIssueDetails[];

                        /**
                         * Gets the default type url for CrashlyticsStabilityDigestPayload
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace CrashlyticsStabilityDigestPayload {

                        /** Properties of a TrendingIssueDetails. */
                        interface ITrendingIssueDetails {

                            /** TrendingIssueDetails type */
                            type?: (string|null);

                            /** TrendingIssueDetails issue */
                            issue?: (google.events.firebase.firebasealerts.v1.ICrashlyticsIssue|null);

                            /** TrendingIssueDetails eventCount */
                            eventCount?: (number|Long|null);

                            /** TrendingIssueDetails userCount */
                            userCount?: (number|Long|null);
                        }

                        /** Represents a TrendingIssueDetails. */
                        class TrendingIssueDetails implements ITrendingIssueDetails {

                            /**
                             * Constructs a new TrendingIssueDetails.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.events.firebase.firebasealerts.v1.CrashlyticsStabilityDigestPayload.ITrendingIssueDetails);

                            /** TrendingIssueDetails type. */
                            public type: string;

                            /** TrendingIssueDetails issue. */
                            public issue?: (google.events.firebase.firebasealerts.v1.ICrashlyticsIssue|null);

                            /** TrendingIssueDetails eventCount. */
                            public eventCount: (number|Long);

                            /** TrendingIssueDetails userCount. */
                            public userCount: (number|Long);

                            /**
                             * Gets the default type url for TrendingIssueDetails
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a CrashlyticsNewAnrIssuePayload. */
                    interface ICrashlyticsNewAnrIssuePayload {

                        /** CrashlyticsNewAnrIssuePayload issue */
                        issue?: (google.events.firebase.firebasealerts.v1.ICrashlyticsIssue|null);
                    }

                    /** Represents a CrashlyticsNewAnrIssuePayload. */
                    class CrashlyticsNewAnrIssuePayload implements ICrashlyticsNewAnrIssuePayload {

                        /**
                         * Constructs a new CrashlyticsNewAnrIssuePayload.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.firebasealerts.v1.ICrashlyticsNewAnrIssuePayload);

                        /** CrashlyticsNewAnrIssuePayload issue. */
                        public issue?: (google.events.firebase.firebasealerts.v1.ICrashlyticsIssue|null);

                        /**
                         * Gets the default type url for CrashlyticsNewAnrIssuePayload
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AppDistroNewTesterIosDevicePayload. */
                    interface IAppDistroNewTesterIosDevicePayload {

                        /** AppDistroNewTesterIosDevicePayload testerName */
                        testerName?: (string|null);

                        /** AppDistroNewTesterIosDevicePayload testerEmail */
                        testerEmail?: (string|null);

                        /** AppDistroNewTesterIosDevicePayload testerDeviceModelName */
                        testerDeviceModelName?: (string|null);

                        /** AppDistroNewTesterIosDevicePayload testerDeviceIdentifier */
                        testerDeviceIdentifier?: (string|null);
                    }

                    /** Represents an AppDistroNewTesterIosDevicePayload. */
                    class AppDistroNewTesterIosDevicePayload implements IAppDistroNewTesterIosDevicePayload {

                        /**
                         * Constructs a new AppDistroNewTesterIosDevicePayload.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.firebasealerts.v1.IAppDistroNewTesterIosDevicePayload);

                        /** AppDistroNewTesterIosDevicePayload testerName. */
                        public testerName: string;

                        /** AppDistroNewTesterIosDevicePayload testerEmail. */
                        public testerEmail: string;

                        /** AppDistroNewTesterIosDevicePayload testerDeviceModelName. */
                        public testerDeviceModelName: string;

                        /** AppDistroNewTesterIosDevicePayload testerDeviceIdentifier. */
                        public testerDeviceIdentifier: string;

                        /**
                         * Gets the default type url for AppDistroNewTesterIosDevicePayload
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AppDistroInAppFeedbackPayload. */
                    interface IAppDistroInAppFeedbackPayload {

                        /** AppDistroInAppFeedbackPayload feedbackReport */
                        feedbackReport?: (string|null);

                        /** AppDistroInAppFeedbackPayload feedbackConsoleUri */
                        feedbackConsoleUri?: (string|null);

                        /** AppDistroInAppFeedbackPayload testerName */
                        testerName?: (string|null);

                        /** AppDistroInAppFeedbackPayload testerEmail */
                        testerEmail?: (string|null);

                        /** AppDistroInAppFeedbackPayload appVersion */
                        appVersion?: (string|null);

                        /** AppDistroInAppFeedbackPayload text */
                        text?: (string|null);

                        /** AppDistroInAppFeedbackPayload screenshotUri */
                        screenshotUri?: (string|null);
                    }

                    /** Represents an AppDistroInAppFeedbackPayload. */
                    class AppDistroInAppFeedbackPayload implements IAppDistroInAppFeedbackPayload {

                        /**
                         * Constructs a new AppDistroInAppFeedbackPayload.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.firebasealerts.v1.IAppDistroInAppFeedbackPayload);

                        /** AppDistroInAppFeedbackPayload feedbackReport. */
                        public feedbackReport: string;

                        /** AppDistroInAppFeedbackPayload feedbackConsoleUri. */
                        public feedbackConsoleUri: string;

                        /** AppDistroInAppFeedbackPayload testerName. */
                        public testerName: string;

                        /** AppDistroInAppFeedbackPayload testerEmail. */
                        public testerEmail: string;

                        /** AppDistroInAppFeedbackPayload appVersion. */
                        public appVersion: string;

                        /** AppDistroInAppFeedbackPayload text. */
                        public text: string;

                        /** AppDistroInAppFeedbackPayload screenshotUri. */
                        public screenshotUri: string;

                        /**
                         * Gets the default type url for AppDistroInAppFeedbackPayload
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BillingPlanUpdatePayload. */
                    interface IBillingPlanUpdatePayload {

                        /** BillingPlanUpdatePayload billingPlan */
                        billingPlan?: (string|null);

                        /** BillingPlanUpdatePayload principalEmail */
                        principalEmail?: (string|null);

                        /** BillingPlanUpdatePayload notificationType */
                        notificationType?: (string|null);
                    }

                    /** Represents a BillingPlanUpdatePayload. */
                    class BillingPlanUpdatePayload implements IBillingPlanUpdatePayload {

                        /**
                         * Constructs a new BillingPlanUpdatePayload.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.firebasealerts.v1.IBillingPlanUpdatePayload);

                        /** BillingPlanUpdatePayload billingPlan. */
                        public billingPlan: string;

                        /** BillingPlanUpdatePayload principalEmail. */
                        public principalEmail: string;

                        /** BillingPlanUpdatePayload notificationType. */
                        public notificationType: string;

                        /**
                         * Gets the default type url for BillingPlanUpdatePayload
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BillingPlanAutomatedUpdatePayload. */
                    interface IBillingPlanAutomatedUpdatePayload {

                        /** BillingPlanAutomatedUpdatePayload billingPlan */
                        billingPlan?: (string|null);

                        /** BillingPlanAutomatedUpdatePayload notificationType */
                        notificationType?: (string|null);
                    }

                    /** Represents a BillingPlanAutomatedUpdatePayload. */
                    class BillingPlanAutomatedUpdatePayload implements IBillingPlanAutomatedUpdatePayload {

                        /**
                         * Constructs a new BillingPlanAutomatedUpdatePayload.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.firebasealerts.v1.IBillingPlanAutomatedUpdatePayload);

                        /** BillingPlanAutomatedUpdatePayload billingPlan. */
                        public billingPlan: string;

                        /** BillingPlanAutomatedUpdatePayload notificationType. */
                        public notificationType: string;

                        /**
                         * Gets the default type url for BillingPlanAutomatedUpdatePayload
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }

            /** Namespace database. */
            namespace database {

                /** Namespace v1. */
                namespace v1 {

                    /** Properties of a ReferenceCreatedEvent. */
                    interface IReferenceCreatedEvent {

                        /** ReferenceCreatedEvent data */
                        data?: (google.events.firebase.database.v1.IReferenceEventData|null);
                    }

                    /** Represents a ReferenceCreatedEvent. */
                    class ReferenceCreatedEvent implements IReferenceCreatedEvent {

                        /**
                         * Constructs a new ReferenceCreatedEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.database.v1.IReferenceCreatedEvent);

                        /** ReferenceCreatedEvent data. */
                        public data?: (google.events.firebase.database.v1.IReferenceEventData|null);

                        /**
                         * Gets the default type url for ReferenceCreatedEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ReferenceUpdatedEvent. */
                    interface IReferenceUpdatedEvent {

                        /** ReferenceUpdatedEvent data */
                        data?: (google.events.firebase.database.v1.IReferenceEventData|null);
                    }

                    /** Represents a ReferenceUpdatedEvent. */
                    class ReferenceUpdatedEvent implements IReferenceUpdatedEvent {

                        /**
                         * Constructs a new ReferenceUpdatedEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.database.v1.IReferenceUpdatedEvent);

                        /** ReferenceUpdatedEvent data. */
                        public data?: (google.events.firebase.database.v1.IReferenceEventData|null);

                        /**
                         * Gets the default type url for ReferenceUpdatedEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ReferenceDeletedEvent. */
                    interface IReferenceDeletedEvent {

                        /** ReferenceDeletedEvent data */
                        data?: (google.events.firebase.database.v1.IReferenceEventData|null);
                    }

                    /** Represents a ReferenceDeletedEvent. */
                    class ReferenceDeletedEvent implements IReferenceDeletedEvent {

                        /**
                         * Constructs a new ReferenceDeletedEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.database.v1.IReferenceDeletedEvent);

                        /** ReferenceDeletedEvent data. */
                        public data?: (google.events.firebase.database.v1.IReferenceEventData|null);

                        /**
                         * Gets the default type url for ReferenceDeletedEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ReferenceWrittenEvent. */
                    interface IReferenceWrittenEvent {

                        /** ReferenceWrittenEvent data */
                        data?: (google.events.firebase.database.v1.IReferenceEventData|null);
                    }

                    /** Represents a ReferenceWrittenEvent. */
                    class ReferenceWrittenEvent implements IReferenceWrittenEvent {

                        /**
                         * Constructs a new ReferenceWrittenEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.database.v1.IReferenceWrittenEvent);

                        /** ReferenceWrittenEvent data. */
                        public data?: (google.events.firebase.database.v1.IReferenceEventData|null);

                        /**
                         * Gets the default type url for ReferenceWrittenEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ReferenceEventData. */
                    interface IReferenceEventData {

                        /** ReferenceEventData data */
                        data?: (google.protobuf.IValue|null);

                        /** ReferenceEventData delta */
                        delta?: (google.protobuf.IValue|null);
                    }

                    /** Represents a ReferenceEventData. */
                    class ReferenceEventData implements IReferenceEventData {

                        /**
                         * Constructs a new ReferenceEventData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.database.v1.IReferenceEventData);

                        /** ReferenceEventData data. */
                        public data?: (google.protobuf.IValue|null);

                        /** ReferenceEventData delta. */
                        public delta?: (google.protobuf.IValue|null);

                        /**
                         * Gets the default type url for ReferenceEventData
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }

            /** Namespace auth. */
            namespace auth {

                /** Namespace v1. */
                namespace v1 {

                    /** Properties of a UserCreatedEvent. */
                    interface IUserCreatedEvent {

                        /** UserCreatedEvent data */
                        data?: (google.events.firebase.auth.v1.IAuthEventData|null);
                    }

                    /** Represents a UserCreatedEvent. */
                    class UserCreatedEvent implements IUserCreatedEvent {

                        /**
                         * Constructs a new UserCreatedEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.auth.v1.IUserCreatedEvent);

                        /** UserCreatedEvent data. */
                        public data?: (google.events.firebase.auth.v1.IAuthEventData|null);

                        /**
                         * Gets the default type url for UserCreatedEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a UserDeletedEvent. */
                    interface IUserDeletedEvent {

                        /** UserDeletedEvent data */
                        data?: (google.events.firebase.auth.v1.IAuthEventData|null);
                    }

                    /** Represents a UserDeletedEvent. */
                    class UserDeletedEvent implements IUserDeletedEvent {

                        /**
                         * Constructs a new UserDeletedEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.auth.v1.IUserDeletedEvent);

                        /** UserDeletedEvent data. */
                        public data?: (google.events.firebase.auth.v1.IAuthEventData|null);

                        /**
                         * Gets the default type url for UserDeletedEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AuthEventData. */
                    interface IAuthEventData {

                        /** AuthEventData uid */
                        uid?: (string|null);

                        /** AuthEventData email */
                        email?: (string|null);

                        /** AuthEventData emailVerified */
                        emailVerified?: (boolean|null);

                        /** AuthEventData displayName */
                        displayName?: (string|null);

                        /** AuthEventData photo_URL */
                        photo_URL?: (string|null);

                        /** AuthEventData disabled */
                        disabled?: (boolean|null);

                        /** AuthEventData metadata */
                        metadata?: (google.events.firebase.auth.v1.IUserMetadata|null);

                        /** AuthEventData providerData */
                        providerData?: (google.events.firebase.auth.v1.IUserInfo[]|null);

                        /** AuthEventData phoneNumber */
                        phoneNumber?: (string|null);

                        /** AuthEventData customClaims */
                        customClaims?: (google.protobuf.IStruct|null);
                    }

                    /** Represents an AuthEventData. */
                    class AuthEventData implements IAuthEventData {

                        /**
                         * Constructs a new AuthEventData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.auth.v1.IAuthEventData);

                        /** AuthEventData uid. */
                        public uid: string;

                        /** AuthEventData email. */
                        public email: string;

                        /** AuthEventData emailVerified. */
                        public emailVerified: boolean;

                        /** AuthEventData displayName. */
                        public displayName: string;

                        /** AuthEventData photo_URL. */
                        public photo_URL: string;

                        /** AuthEventData disabled. */
                        public disabled: boolean;

                        /** AuthEventData metadata. */
                        public metadata?: (google.events.firebase.auth.v1.IUserMetadata|null);

                        /** AuthEventData providerData. */
                        public providerData: google.events.firebase.auth.v1.IUserInfo[];

                        /** AuthEventData phoneNumber. */
                        public phoneNumber: string;

                        /** AuthEventData customClaims. */
                        public customClaims?: (google.protobuf.IStruct|null);

                        /**
                         * Gets the default type url for AuthEventData
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a UserMetadata. */
                    interface IUserMetadata {

                        /** UserMetadata createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** UserMetadata lastSignInTime */
                        lastSignInTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a UserMetadata. */
                    class UserMetadata implements IUserMetadata {

                        /**
                         * Constructs a new UserMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.auth.v1.IUserMetadata);

                        /** UserMetadata createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** UserMetadata lastSignInTime. */
                        public lastSignInTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Gets the default type url for UserMetadata
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a UserInfo. */
                    interface IUserInfo {

                        /** UserInfo uid */
                        uid?: (string|null);

                        /** UserInfo email */
                        email?: (string|null);

                        /** UserInfo displayName */
                        displayName?: (string|null);

                        /** UserInfo photo_URL */
                        photo_URL?: (string|null);

                        /** UserInfo providerId */
                        providerId?: (string|null);
                    }

                    /** Represents a UserInfo. */
                    class UserInfo implements IUserInfo {

                        /**
                         * Constructs a new UserInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.auth.v1.IUserInfo);

                        /** UserInfo uid. */
                        public uid: string;

                        /** UserInfo email. */
                        public email: string;

                        /** UserInfo displayName. */
                        public displayName: string;

                        /** UserInfo photo_URL. */
                        public photo_URL: string;

                        /** UserInfo providerId. */
                        public providerId: string;

                        /**
                         * Gets the default type url for UserInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }

            /** Namespace analytics. */
            namespace analytics {

                /** Namespace v1. */
                namespace v1 {

                    /** Properties of an AnalyticsLogWrittenEvent. */
                    interface IAnalyticsLogWrittenEvent {

                        /** AnalyticsLogWrittenEvent data */
                        data?: (google.events.firebase.analytics.v1.IAnalyticsLogData|null);
                    }

                    /** Represents an AnalyticsLogWrittenEvent. */
                    class AnalyticsLogWrittenEvent implements IAnalyticsLogWrittenEvent {

                        /**
                         * Constructs a new AnalyticsLogWrittenEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.analytics.v1.IAnalyticsLogWrittenEvent);

                        /** AnalyticsLogWrittenEvent data. */
                        public data?: (google.events.firebase.analytics.v1.IAnalyticsLogData|null);

                        /**
                         * Gets the default type url for AnalyticsLogWrittenEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AnalyticsLogData. */
                    interface IAnalyticsLogData {

                        /** AnalyticsLogData userDim */
                        userDim?: (google.events.firebase.analytics.v1.IUserDimensions|null);

                        /** AnalyticsLogData eventDim */
                        eventDim?: (google.events.firebase.analytics.v1.IEventDimensions[]|null);
                    }

                    /** Represents an AnalyticsLogData. */
                    class AnalyticsLogData implements IAnalyticsLogData {

                        /**
                         * Constructs a new AnalyticsLogData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.analytics.v1.IAnalyticsLogData);

                        /** AnalyticsLogData userDim. */
                        public userDim?: (google.events.firebase.analytics.v1.IUserDimensions|null);

                        /** AnalyticsLogData eventDim. */
                        public eventDim: google.events.firebase.analytics.v1.IEventDimensions[];

                        /**
                         * Gets the default type url for AnalyticsLogData
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a UserDimensions. */
                    interface IUserDimensions {

                        /** UserDimensions userId */
                        userId?: (string|null);

                        /** UserDimensions firstOpenTimestampMicros */
                        firstOpenTimestampMicros?: (number|Long|null);

                        /** UserDimensions userProperties */
                        userProperties?: ({ [k: string]: google.events.firebase.analytics.v1.IUserPropertyValue }|null);

                        /** UserDimensions deviceInfo */
                        deviceInfo?: (google.events.firebase.analytics.v1.IDeviceInfo|null);

                        /** UserDimensions geoInfo */
                        geoInfo?: (google.events.firebase.analytics.v1.IGeoInfo|null);

                        /** UserDimensions appInfo */
                        appInfo?: (google.events.firebase.analytics.v1.IAppInfo|null);

                        /** UserDimensions trafficSource */
                        trafficSource?: (google.events.firebase.analytics.v1.ITrafficSource|null);

                        /** UserDimensions bundleInfo */
                        bundleInfo?: (google.events.firebase.analytics.v1.IExportBundleInfo|null);

                        /** UserDimensions ltvInfo */
                        ltvInfo?: (google.events.firebase.analytics.v1.ILtvInfo|null);
                    }

                    /** Represents a UserDimensions. */
                    class UserDimensions implements IUserDimensions {

                        /**
                         * Constructs a new UserDimensions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.analytics.v1.IUserDimensions);

                        /** UserDimensions userId. */
                        public userId: string;

                        /** UserDimensions firstOpenTimestampMicros. */
                        public firstOpenTimestampMicros: (number|Long);

                        /** UserDimensions userProperties. */
                        public userProperties: { [k: string]: google.events.firebase.analytics.v1.IUserPropertyValue };

                        /** UserDimensions deviceInfo. */
                        public deviceInfo?: (google.events.firebase.analytics.v1.IDeviceInfo|null);

                        /** UserDimensions geoInfo. */
                        public geoInfo?: (google.events.firebase.analytics.v1.IGeoInfo|null);

                        /** UserDimensions appInfo. */
                        public appInfo?: (google.events.firebase.analytics.v1.IAppInfo|null);

                        /** UserDimensions trafficSource. */
                        public trafficSource?: (google.events.firebase.analytics.v1.ITrafficSource|null);

                        /** UserDimensions bundleInfo. */
                        public bundleInfo?: (google.events.firebase.analytics.v1.IExportBundleInfo|null);

                        /** UserDimensions ltvInfo. */
                        public ltvInfo?: (google.events.firebase.analytics.v1.ILtvInfo|null);

                        /**
                         * Gets the default type url for UserDimensions
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a UserPropertyValue. */
                    interface IUserPropertyValue {

                        /** UserPropertyValue value */
                        value?: (google.events.firebase.analytics.v1.IAnalyticsValue|null);

                        /** UserPropertyValue setTimestampUsec */
                        setTimestampUsec?: (number|Long|null);

                        /** UserPropertyValue index */
                        index?: (number|null);
                    }

                    /** Represents a UserPropertyValue. */
                    class UserPropertyValue implements IUserPropertyValue {

                        /**
                         * Constructs a new UserPropertyValue.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.analytics.v1.IUserPropertyValue);

                        /** UserPropertyValue value. */
                        public value?: (google.events.firebase.analytics.v1.IAnalyticsValue|null);

                        /** UserPropertyValue setTimestampUsec. */
                        public setTimestampUsec: (number|Long);

                        /** UserPropertyValue index. */
                        public index: number;

                        /**
                         * Gets the default type url for UserPropertyValue
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AnalyticsValue. */
                    interface IAnalyticsValue {

                        /** AnalyticsValue stringValue */
                        stringValue?: (string|null);

                        /** AnalyticsValue intValue */
                        intValue?: (number|Long|null);

                        /** AnalyticsValue floatValue */
                        floatValue?: (number|null);

                        /** AnalyticsValue doubleValue */
                        doubleValue?: (number|null);
                    }

                    /** Represents an AnalyticsValue. */
                    class AnalyticsValue implements IAnalyticsValue {

                        /**
                         * Constructs a new AnalyticsValue.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.analytics.v1.IAnalyticsValue);

                        /** AnalyticsValue stringValue. */
                        public stringValue?: (string|null);

                        /** AnalyticsValue intValue. */
                        public intValue?: (number|Long|null);

                        /** AnalyticsValue floatValue. */
                        public floatValue?: (number|null);

                        /** AnalyticsValue doubleValue. */
                        public doubleValue?: (number|null);

                        /** AnalyticsValue paramValue. */
                        public paramValue?: ("stringValue"|"intValue"|"floatValue"|"doubleValue");

                        /**
                         * Gets the default type url for AnalyticsValue
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeviceInfo. */
                    interface IDeviceInfo {

                        /** DeviceInfo deviceCategory */
                        deviceCategory?: (string|null);

                        /** DeviceInfo mobileBrandName */
                        mobileBrandName?: (string|null);

                        /** DeviceInfo mobileModelName */
                        mobileModelName?: (string|null);

                        /** DeviceInfo mobileMarketingName */
                        mobileMarketingName?: (string|null);

                        /** DeviceInfo deviceModel */
                        deviceModel?: (string|null);

                        /** DeviceInfo platformVersion */
                        platformVersion?: (string|null);

                        /** DeviceInfo deviceId */
                        deviceId?: (string|null);

                        /** DeviceInfo resettableDeviceId */
                        resettableDeviceId?: (string|null);

                        /** DeviceInfo userDefaultLanguage */
                        userDefaultLanguage?: (string|null);

                        /** DeviceInfo deviceTimeZoneOffsetSeconds */
                        deviceTimeZoneOffsetSeconds?: (number|null);

                        /** DeviceInfo limitedAdTracking */
                        limitedAdTracking?: (boolean|null);
                    }

                    /** Represents a DeviceInfo. */
                    class DeviceInfo implements IDeviceInfo {

                        /**
                         * Constructs a new DeviceInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.analytics.v1.IDeviceInfo);

                        /** DeviceInfo deviceCategory. */
                        public deviceCategory: string;

                        /** DeviceInfo mobileBrandName. */
                        public mobileBrandName: string;

                        /** DeviceInfo mobileModelName. */
                        public mobileModelName: string;

                        /** DeviceInfo mobileMarketingName. */
                        public mobileMarketingName: string;

                        /** DeviceInfo deviceModel. */
                        public deviceModel: string;

                        /** DeviceInfo platformVersion. */
                        public platformVersion: string;

                        /** DeviceInfo deviceId. */
                        public deviceId: string;

                        /** DeviceInfo resettableDeviceId. */
                        public resettableDeviceId: string;

                        /** DeviceInfo userDefaultLanguage. */
                        public userDefaultLanguage: string;

                        /** DeviceInfo deviceTimeZoneOffsetSeconds. */
                        public deviceTimeZoneOffsetSeconds: number;

                        /** DeviceInfo limitedAdTracking. */
                        public limitedAdTracking: boolean;

                        /**
                         * Gets the default type url for DeviceInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AppInfo. */
                    interface IAppInfo {

                        /** AppInfo appVersion */
                        appVersion?: (string|null);

                        /** AppInfo appInstanceId */
                        appInstanceId?: (string|null);

                        /** AppInfo appStore */
                        appStore?: (string|null);

                        /** AppInfo appPlatform */
                        appPlatform?: (string|null);

                        /** AppInfo appId */
                        appId?: (string|null);
                    }

                    /** Represents an AppInfo. */
                    class AppInfo implements IAppInfo {

                        /**
                         * Constructs a new AppInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.analytics.v1.IAppInfo);

                        /** AppInfo appVersion. */
                        public appVersion: string;

                        /** AppInfo appInstanceId. */
                        public appInstanceId: string;

                        /** AppInfo appStore. */
                        public appStore: string;

                        /** AppInfo appPlatform. */
                        public appPlatform: string;

                        /** AppInfo appId. */
                        public appId: string;

                        /**
                         * Gets the default type url for AppInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GeoInfo. */
                    interface IGeoInfo {

                        /** GeoInfo continent */
                        continent?: (string|null);

                        /** GeoInfo country */
                        country?: (string|null);

                        /** GeoInfo region */
                        region?: (string|null);

                        /** GeoInfo city */
                        city?: (string|null);
                    }

                    /** Represents a GeoInfo. */
                    class GeoInfo implements IGeoInfo {

                        /**
                         * Constructs a new GeoInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.analytics.v1.IGeoInfo);

                        /** GeoInfo continent. */
                        public continent: string;

                        /** GeoInfo country. */
                        public country: string;

                        /** GeoInfo region. */
                        public region: string;

                        /** GeoInfo city. */
                        public city: string;

                        /**
                         * Gets the default type url for GeoInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TrafficSource. */
                    interface ITrafficSource {

                        /** TrafficSource userAcquiredCampaign */
                        userAcquiredCampaign?: (string|null);

                        /** TrafficSource userAcquiredSource */
                        userAcquiredSource?: (string|null);

                        /** TrafficSource userAcquiredMedium */
                        userAcquiredMedium?: (string|null);
                    }

                    /** Represents a TrafficSource. */
                    class TrafficSource implements ITrafficSource {

                        /**
                         * Constructs a new TrafficSource.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.analytics.v1.ITrafficSource);

                        /** TrafficSource userAcquiredCampaign. */
                        public userAcquiredCampaign: string;

                        /** TrafficSource userAcquiredSource. */
                        public userAcquiredSource: string;

                        /** TrafficSource userAcquiredMedium. */
                        public userAcquiredMedium: string;

                        /**
                         * Gets the default type url for TrafficSource
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ExportBundleInfo. */
                    interface IExportBundleInfo {

                        /** ExportBundleInfo bundleSequenceId */
                        bundleSequenceId?: (number|null);

                        /** ExportBundleInfo serverTimestampOffsetMicros */
                        serverTimestampOffsetMicros?: (number|Long|null);
                    }

                    /** Represents an ExportBundleInfo. */
                    class ExportBundleInfo implements IExportBundleInfo {

                        /**
                         * Constructs a new ExportBundleInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.analytics.v1.IExportBundleInfo);

                        /** ExportBundleInfo bundleSequenceId. */
                        public bundleSequenceId: number;

                        /** ExportBundleInfo serverTimestampOffsetMicros. */
                        public serverTimestampOffsetMicros: (number|Long);

                        /**
                         * Gets the default type url for ExportBundleInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a LtvInfo. */
                    interface ILtvInfo {

                        /** LtvInfo revenue */
                        revenue?: (number|null);

                        /** LtvInfo currency */
                        currency?: (string|null);
                    }

                    /** Represents a LtvInfo. */
                    class LtvInfo implements ILtvInfo {

                        /**
                         * Constructs a new LtvInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.analytics.v1.ILtvInfo);

                        /** LtvInfo revenue. */
                        public revenue: number;

                        /** LtvInfo currency. */
                        public currency: string;

                        /**
                         * Gets the default type url for LtvInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an EventDimensions. */
                    interface IEventDimensions {

                        /** EventDimensions date */
                        date?: (string|null);

                        /** EventDimensions name */
                        name?: (string|null);

                        /** EventDimensions params */
                        params?: ({ [k: string]: google.events.firebase.analytics.v1.IAnalyticsValue }|null);

                        /** EventDimensions timestampMicros */
                        timestampMicros?: (number|Long|null);

                        /** EventDimensions previousTimestampMicros */
                        previousTimestampMicros?: (number|Long|null);

                        /** EventDimensions valueInUsd */
                        valueInUsd?: (number|null);
                    }

                    /** Represents an EventDimensions. */
                    class EventDimensions implements IEventDimensions {

                        /**
                         * Constructs a new EventDimensions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.firebase.analytics.v1.IEventDimensions);

                        /** EventDimensions date. */
                        public date: string;

                        /** EventDimensions name. */
                        public name: string;

                        /** EventDimensions params. */
                        public params: { [k: string]: google.events.firebase.analytics.v1.IAnalyticsValue };

                        /** EventDimensions timestampMicros. */
                        public timestampMicros: (number|Long);

                        /** EventDimensions previousTimestampMicros. */
                        public previousTimestampMicros: (number|Long);

                        /** EventDimensions valueInUsd. */
                        public valueInUsd: number;

                        /**
                         * Gets the default type url for EventDimensions
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }
        }

        /** Properties of an ExtensionAttribute. */
        interface IExtensionAttribute {

            /** ExtensionAttribute name */
            name?: (string|null);

            /** ExtensionAttribute description */
            description?: (string|null);

            /** ExtensionAttribute camelCaseName */
            camelCaseName?: (string|null);
        }

        /** Represents an ExtensionAttribute. */
        class ExtensionAttribute implements IExtensionAttribute {

            /**
             * Constructs a new ExtensionAttribute.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.events.IExtensionAttribute);

            /** ExtensionAttribute name. */
            public name: string;

            /** ExtensionAttribute description. */
            public description: string;

            /** ExtensionAttribute camelCaseName. */
            public camelCaseName: string;

            /**
             * Gets the default type url for ExtensionAttribute
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Namespace cloud. */
        namespace cloud {

            /** Namespace storage. */
            namespace storage {

                /** Namespace v1. */
                namespace v1 {

                    /** Properties of an ObjectFinalizedEvent. */
                    interface IObjectFinalizedEvent {

                        /** ObjectFinalizedEvent data */
                        data?: (google.events.cloud.storage.v1.IStorageObjectData|null);
                    }

                    /** Represents an ObjectFinalizedEvent. */
                    class ObjectFinalizedEvent implements IObjectFinalizedEvent {

                        /**
                         * Constructs a new ObjectFinalizedEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.storage.v1.IObjectFinalizedEvent);

                        /** ObjectFinalizedEvent data. */
                        public data?: (google.events.cloud.storage.v1.IStorageObjectData|null);

                        /**
                         * Gets the default type url for ObjectFinalizedEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ObjectArchivedEvent. */
                    interface IObjectArchivedEvent {

                        /** ObjectArchivedEvent data */
                        data?: (google.events.cloud.storage.v1.IStorageObjectData|null);
                    }

                    /** Represents an ObjectArchivedEvent. */
                    class ObjectArchivedEvent implements IObjectArchivedEvent {

                        /**
                         * Constructs a new ObjectArchivedEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.storage.v1.IObjectArchivedEvent);

                        /** ObjectArchivedEvent data. */
                        public data?: (google.events.cloud.storage.v1.IStorageObjectData|null);

                        /**
                         * Gets the default type url for ObjectArchivedEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ObjectDeletedEvent. */
                    interface IObjectDeletedEvent {

                        /** ObjectDeletedEvent data */
                        data?: (google.events.cloud.storage.v1.IStorageObjectData|null);
                    }

                    /** Represents an ObjectDeletedEvent. */
                    class ObjectDeletedEvent implements IObjectDeletedEvent {

                        /**
                         * Constructs a new ObjectDeletedEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.storage.v1.IObjectDeletedEvent);

                        /** ObjectDeletedEvent data. */
                        public data?: (google.events.cloud.storage.v1.IStorageObjectData|null);

                        /**
                         * Gets the default type url for ObjectDeletedEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ObjectMetadataUpdatedEvent. */
                    interface IObjectMetadataUpdatedEvent {

                        /** ObjectMetadataUpdatedEvent data */
                        data?: (google.events.cloud.storage.v1.IStorageObjectData|null);
                    }

                    /** Represents an ObjectMetadataUpdatedEvent. */
                    class ObjectMetadataUpdatedEvent implements IObjectMetadataUpdatedEvent {

                        /**
                         * Constructs a new ObjectMetadataUpdatedEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.storage.v1.IObjectMetadataUpdatedEvent);

                        /** ObjectMetadataUpdatedEvent data. */
                        public data?: (google.events.cloud.storage.v1.IStorageObjectData|null);

                        /**
                         * Gets the default type url for ObjectMetadataUpdatedEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a StorageObjectData. */
                    interface IStorageObjectData {

                        /** StorageObjectData contentEncoding */
                        contentEncoding?: (string|null);

                        /** StorageObjectData contentDisposition */
                        contentDisposition?: (string|null);

                        /** StorageObjectData cacheControl */
                        cacheControl?: (string|null);

                        /** StorageObjectData contentLanguage */
                        contentLanguage?: (string|null);

                        /** StorageObjectData metageneration */
                        metageneration?: (number|Long|null);

                        /** StorageObjectData timeDeleted */
                        timeDeleted?: (google.protobuf.ITimestamp|null);

                        /** StorageObjectData contentType */
                        contentType?: (string|null);

                        /** StorageObjectData size */
                        size?: (number|Long|null);

                        /** StorageObjectData timeCreated */
                        timeCreated?: (google.protobuf.ITimestamp|null);

                        /** StorageObjectData crc32c */
                        crc32c?: (string|null);

                        /** StorageObjectData componentCount */
                        componentCount?: (number|null);

                        /** StorageObjectData md5Hash */
                        md5Hash?: (string|null);

                        /** StorageObjectData etag */
                        etag?: (string|null);

                        /** StorageObjectData updated */
                        updated?: (google.protobuf.ITimestamp|null);

                        /** StorageObjectData storageClass */
                        storageClass?: (string|null);

                        /** StorageObjectData kmsKeyName */
                        kmsKeyName?: (string|null);

                        /** StorageObjectData timeStorageClassUpdated */
                        timeStorageClassUpdated?: (google.protobuf.ITimestamp|null);

                        /** StorageObjectData temporaryHold */
                        temporaryHold?: (boolean|null);

                        /** StorageObjectData retentionExpirationTime */
                        retentionExpirationTime?: (google.protobuf.ITimestamp|null);

                        /** StorageObjectData metadata */
                        metadata?: ({ [k: string]: string }|null);

                        /** StorageObjectData eventBasedHold */
                        eventBasedHold?: (boolean|null);

                        /** StorageObjectData name */
                        name?: (string|null);

                        /** StorageObjectData id */
                        id?: (string|null);

                        /** StorageObjectData bucket */
                        bucket?: (string|null);

                        /** StorageObjectData generation */
                        generation?: (number|Long|null);

                        /** StorageObjectData customerEncryption */
                        customerEncryption?: (google.events.cloud.storage.v1.StorageObjectData.ICustomerEncryption|null);

                        /** StorageObjectData mediaLink */
                        mediaLink?: (string|null);

                        /** StorageObjectData selfLink */
                        selfLink?: (string|null);

                        /** StorageObjectData kind */
                        kind?: (string|null);
                    }

                    /** Represents a StorageObjectData. */
                    class StorageObjectData implements IStorageObjectData {

                        /**
                         * Constructs a new StorageObjectData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.storage.v1.IStorageObjectData);

                        /** StorageObjectData contentEncoding. */
                        public contentEncoding: string;

                        /** StorageObjectData contentDisposition. */
                        public contentDisposition: string;

                        /** StorageObjectData cacheControl. */
                        public cacheControl: string;

                        /** StorageObjectData contentLanguage. */
                        public contentLanguage: string;

                        /** StorageObjectData metageneration. */
                        public metageneration: (number|Long);

                        /** StorageObjectData timeDeleted. */
                        public timeDeleted?: (google.protobuf.ITimestamp|null);

                        /** StorageObjectData contentType. */
                        public contentType: string;

                        /** StorageObjectData size. */
                        public size: (number|Long);

                        /** StorageObjectData timeCreated. */
                        public timeCreated?: (google.protobuf.ITimestamp|null);

                        /** StorageObjectData crc32c. */
                        public crc32c: string;

                        /** StorageObjectData componentCount. */
                        public componentCount: number;

                        /** StorageObjectData md5Hash. */
                        public md5Hash: string;

                        /** StorageObjectData etag. */
                        public etag: string;

                        /** StorageObjectData updated. */
                        public updated?: (google.protobuf.ITimestamp|null);

                        /** StorageObjectData storageClass. */
                        public storageClass: string;

                        /** StorageObjectData kmsKeyName. */
                        public kmsKeyName: string;

                        /** StorageObjectData timeStorageClassUpdated. */
                        public timeStorageClassUpdated?: (google.protobuf.ITimestamp|null);

                        /** StorageObjectData temporaryHold. */
                        public temporaryHold: boolean;

                        /** StorageObjectData retentionExpirationTime. */
                        public retentionExpirationTime?: (google.protobuf.ITimestamp|null);

                        /** StorageObjectData metadata. */
                        public metadata: { [k: string]: string };

                        /** StorageObjectData eventBasedHold. */
                        public eventBasedHold: boolean;

                        /** StorageObjectData name. */
                        public name: string;

                        /** StorageObjectData id. */
                        public id: string;

                        /** StorageObjectData bucket. */
                        public bucket: string;

                        /** StorageObjectData generation. */
                        public generation: (number|Long);

                        /** StorageObjectData customerEncryption. */
                        public customerEncryption?: (google.events.cloud.storage.v1.StorageObjectData.ICustomerEncryption|null);

                        /** StorageObjectData mediaLink. */
                        public mediaLink: string;

                        /** StorageObjectData selfLink. */
                        public selfLink: string;

                        /** StorageObjectData kind. */
                        public kind: string;

                        /**
                         * Gets the default type url for StorageObjectData
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace StorageObjectData {

                        /** Properties of a CustomerEncryption. */
                        interface ICustomerEncryption {

                            /** CustomerEncryption encryptionAlgorithm */
                            encryptionAlgorithm?: (string|null);

                            /** CustomerEncryption keySha256 */
                            keySha256?: (string|null);
                        }

                        /** Represents a CustomerEncryption. */
                        class CustomerEncryption implements ICustomerEncryption {

                            /**
                             * Constructs a new CustomerEncryption.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.events.cloud.storage.v1.StorageObjectData.ICustomerEncryption);

                            /** CustomerEncryption encryptionAlgorithm. */
                            public encryptionAlgorithm: string;

                            /** CustomerEncryption keySha256. */
                            public keySha256: string;

                            /**
                             * Gets the default type url for CustomerEncryption
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }
                }
            }

            /** Namespace scheduler. */
            namespace scheduler {

                /** Namespace v1. */
                namespace v1 {

                    /** Properties of a JobExecutedEvent. */
                    interface IJobExecutedEvent {

                        /** JobExecutedEvent data */
                        data?: (google.events.cloud.scheduler.v1.ISchedulerJobData|null);
                    }

                    /** Represents a JobExecutedEvent. */
                    class JobExecutedEvent implements IJobExecutedEvent {

                        /**
                         * Constructs a new JobExecutedEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.scheduler.v1.IJobExecutedEvent);

                        /** JobExecutedEvent data. */
                        public data?: (google.events.cloud.scheduler.v1.ISchedulerJobData|null);

                        /**
                         * Gets the default type url for JobExecutedEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SchedulerJobData. */
                    interface ISchedulerJobData {

                        /** SchedulerJobData customData */
                        customData?: (Uint8Array|null);
                    }

                    /** Represents a SchedulerJobData. */
                    class SchedulerJobData implements ISchedulerJobData {

                        /**
                         * Constructs a new SchedulerJobData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.scheduler.v1.ISchedulerJobData);

                        /** SchedulerJobData customData. */
                        public customData: Uint8Array;

                        /**
                         * Gets the default type url for SchedulerJobData
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }

            /** Namespace pubsub. */
            namespace pubsub {

                /** Namespace v1. */
                namespace v1 {

                    /** Properties of a MessagePublishedEvent. */
                    interface IMessagePublishedEvent {

                        /** MessagePublishedEvent data */
                        data?: (google.events.cloud.pubsub.v1.IMessagePublishedData|null);
                    }

                    /** Represents a MessagePublishedEvent. */
                    class MessagePublishedEvent implements IMessagePublishedEvent {

                        /**
                         * Constructs a new MessagePublishedEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.pubsub.v1.IMessagePublishedEvent);

                        /** MessagePublishedEvent data. */
                        public data?: (google.events.cloud.pubsub.v1.IMessagePublishedData|null);

                        /**
                         * Gets the default type url for MessagePublishedEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a MessagePublishedData. */
                    interface IMessagePublishedData {

                        /** MessagePublishedData message */
                        message?: (google.events.cloud.pubsub.v1.IPubsubMessage|null);

                        /** MessagePublishedData subscription */
                        subscription?: (string|null);
                    }

                    /** Represents a MessagePublishedData. */
                    class MessagePublishedData implements IMessagePublishedData {

                        /**
                         * Constructs a new MessagePublishedData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.pubsub.v1.IMessagePublishedData);

                        /** MessagePublishedData message. */
                        public message?: (google.events.cloud.pubsub.v1.IPubsubMessage|null);

                        /** MessagePublishedData subscription. */
                        public subscription: string;

                        /**
                         * Gets the default type url for MessagePublishedData
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PubsubMessage. */
                    interface IPubsubMessage {

                        /** PubsubMessage data */
                        data?: (Uint8Array|null);

                        /** PubsubMessage attributes */
                        attributes?: ({ [k: string]: string }|null);

                        /** PubsubMessage messageId */
                        messageId?: (string|null);

                        /** PubsubMessage publishTime */
                        publishTime?: (google.protobuf.ITimestamp|null);

                        /** PubsubMessage orderingKey */
                        orderingKey?: (string|null);
                    }

                    /** Represents a PubsubMessage. */
                    class PubsubMessage implements IPubsubMessage {

                        /**
                         * Constructs a new PubsubMessage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.pubsub.v1.IPubsubMessage);

                        /** PubsubMessage data. */
                        public data: Uint8Array;

                        /** PubsubMessage attributes. */
                        public attributes: { [k: string]: string };

                        /** PubsubMessage messageId. */
                        public messageId: string;

                        /** PubsubMessage publishTime. */
                        public publishTime?: (google.protobuf.ITimestamp|null);

                        /** PubsubMessage orderingKey. */
                        public orderingKey: string;

                        /**
                         * Gets the default type url for PubsubMessage
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }

            /** Namespace firestore. */
            namespace firestore {

                /** Namespace v1. */
                namespace v1 {

                    /** Properties of a DocumentCreatedEvent. */
                    interface IDocumentCreatedEvent {

                        /** DocumentCreatedEvent data */
                        data?: (google.events.cloud.firestore.v1.IDocumentEventData|null);
                    }

                    /** Represents a DocumentCreatedEvent. */
                    class DocumentCreatedEvent implements IDocumentCreatedEvent {

                        /**
                         * Constructs a new DocumentCreatedEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.firestore.v1.IDocumentCreatedEvent);

                        /** DocumentCreatedEvent data. */
                        public data?: (google.events.cloud.firestore.v1.IDocumentEventData|null);

                        /**
                         * Gets the default type url for DocumentCreatedEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DocumentUpdatedEvent. */
                    interface IDocumentUpdatedEvent {

                        /** DocumentUpdatedEvent data */
                        data?: (google.events.cloud.firestore.v1.IDocumentEventData|null);
                    }

                    /** Represents a DocumentUpdatedEvent. */
                    class DocumentUpdatedEvent implements IDocumentUpdatedEvent {

                        /**
                         * Constructs a new DocumentUpdatedEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.firestore.v1.IDocumentUpdatedEvent);

                        /** DocumentUpdatedEvent data. */
                        public data?: (google.events.cloud.firestore.v1.IDocumentEventData|null);

                        /**
                         * Gets the default type url for DocumentUpdatedEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DocumentDeletedEvent. */
                    interface IDocumentDeletedEvent {

                        /** DocumentDeletedEvent data */
                        data?: (google.events.cloud.firestore.v1.IDocumentEventData|null);
                    }

                    /** Represents a DocumentDeletedEvent. */
                    class DocumentDeletedEvent implements IDocumentDeletedEvent {

                        /**
                         * Constructs a new DocumentDeletedEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.firestore.v1.IDocumentDeletedEvent);

                        /** DocumentDeletedEvent data. */
                        public data?: (google.events.cloud.firestore.v1.IDocumentEventData|null);

                        /**
                         * Gets the default type url for DocumentDeletedEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DocumentWrittenEvent. */
                    interface IDocumentWrittenEvent {

                        /** DocumentWrittenEvent data */
                        data?: (google.events.cloud.firestore.v1.IDocumentEventData|null);
                    }

                    /** Represents a DocumentWrittenEvent. */
                    class DocumentWrittenEvent implements IDocumentWrittenEvent {

                        /**
                         * Constructs a new DocumentWrittenEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.firestore.v1.IDocumentWrittenEvent);

                        /** DocumentWrittenEvent data. */
                        public data?: (google.events.cloud.firestore.v1.IDocumentEventData|null);

                        /**
                         * Gets the default type url for DocumentWrittenEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DocumentEventData. */
                    interface IDocumentEventData {

                        /** DocumentEventData value */
                        value?: (google.events.cloud.firestore.v1.IDocument|null);

                        /** DocumentEventData oldValue */
                        oldValue?: (google.events.cloud.firestore.v1.IDocument|null);

                        /** DocumentEventData updateMask */
                        updateMask?: (google.events.cloud.firestore.v1.IDocumentMask|null);
                    }

                    /** Represents a DocumentEventData. */
                    class DocumentEventData implements IDocumentEventData {

                        /**
                         * Constructs a new DocumentEventData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.firestore.v1.IDocumentEventData);

                        /** DocumentEventData value. */
                        public value?: (google.events.cloud.firestore.v1.IDocument|null);

                        /** DocumentEventData oldValue. */
                        public oldValue?: (google.events.cloud.firestore.v1.IDocument|null);

                        /** DocumentEventData updateMask. */
                        public updateMask?: (google.events.cloud.firestore.v1.IDocumentMask|null);

                        /**
                         * Gets the default type url for DocumentEventData
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DocumentMask. */
                    interface IDocumentMask {

                        /** DocumentMask fieldPaths */
                        fieldPaths?: (string[]|null);
                    }

                    /** Represents a DocumentMask. */
                    class DocumentMask implements IDocumentMask {

                        /**
                         * Constructs a new DocumentMask.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.firestore.v1.IDocumentMask);

                        /** DocumentMask fieldPaths. */
                        public fieldPaths: string[];

                        /**
                         * Gets the default type url for DocumentMask
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Document. */
                    interface IDocument {

                        /** Document name */
                        name?: (string|null);

                        /** Document fields */
                        fields?: ({ [k: string]: google.events.cloud.firestore.v1.IValue }|null);

                        /** Document createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** Document updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a Document. */
                    class Document implements IDocument {

                        /**
                         * Constructs a new Document.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.firestore.v1.IDocument);

                        /** Document name. */
                        public name: string;

                        /** Document fields. */
                        public fields: { [k: string]: google.events.cloud.firestore.v1.IValue };

                        /** Document createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** Document updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Gets the default type url for Document
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Value. */
                    interface IValue {

                        /** Value nullValue */
                        nullValue?: (google.protobuf.NullValue|null);

                        /** Value booleanValue */
                        booleanValue?: (boolean|null);

                        /** Value integerValue */
                        integerValue?: (number|Long|null);

                        /** Value doubleValue */
                        doubleValue?: (number|null);

                        /** Value timestampValue */
                        timestampValue?: (google.protobuf.ITimestamp|null);

                        /** Value stringValue */
                        stringValue?: (string|null);

                        /** Value bytesValue */
                        bytesValue?: (Uint8Array|null);

                        /** Value referenceValue */
                        referenceValue?: (string|null);

                        /** Value geoPointValue */
                        geoPointValue?: (google.type.ILatLng|null);

                        /** Value arrayValue */
                        arrayValue?: (google.events.cloud.firestore.v1.IArrayValue|null);

                        /** Value mapValue */
                        mapValue?: (google.events.cloud.firestore.v1.IMapValue|null);
                    }

                    /** Represents a Value. */
                    class Value implements IValue {

                        /**
                         * Constructs a new Value.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.firestore.v1.IValue);

                        /** Value nullValue. */
                        public nullValue?: (google.protobuf.NullValue|null);

                        /** Value booleanValue. */
                        public booleanValue?: (boolean|null);

                        /** Value integerValue. */
                        public integerValue?: (number|Long|null);

                        /** Value doubleValue. */
                        public doubleValue?: (number|null);

                        /** Value timestampValue. */
                        public timestampValue?: (google.protobuf.ITimestamp|null);

                        /** Value stringValue. */
                        public stringValue?: (string|null);

                        /** Value bytesValue. */
                        public bytesValue?: (Uint8Array|null);

                        /** Value referenceValue. */
                        public referenceValue?: (string|null);

                        /** Value geoPointValue. */
                        public geoPointValue?: (google.type.ILatLng|null);

                        /** Value arrayValue. */
                        public arrayValue?: (google.events.cloud.firestore.v1.IArrayValue|null);

                        /** Value mapValue. */
                        public mapValue?: (google.events.cloud.firestore.v1.IMapValue|null);

                        /** Value valueType. */
                        public valueType?: ("nullValue"|"booleanValue"|"integerValue"|"doubleValue"|"timestampValue"|"stringValue"|"bytesValue"|"referenceValue"|"geoPointValue"|"arrayValue"|"mapValue");

                        /**
                         * Gets the default type url for Value
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ArrayValue. */
                    interface IArrayValue {

                        /** ArrayValue values */
                        values?: (google.events.cloud.firestore.v1.IValue[]|null);
                    }

                    /** Represents an ArrayValue. */
                    class ArrayValue implements IArrayValue {

                        /**
                         * Constructs a new ArrayValue.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.firestore.v1.IArrayValue);

                        /** ArrayValue values. */
                        public values: google.events.cloud.firestore.v1.IValue[];

                        /**
                         * Gets the default type url for ArrayValue
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a MapValue. */
                    interface IMapValue {

                        /** MapValue fields */
                        fields?: ({ [k: string]: google.events.cloud.firestore.v1.IValue }|null);
                    }

                    /** Represents a MapValue. */
                    class MapValue implements IMapValue {

                        /**
                         * Constructs a new MapValue.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.firestore.v1.IMapValue);

                        /** MapValue fields. */
                        public fields: { [k: string]: google.events.cloud.firestore.v1.IValue };

                        /**
                         * Gets the default type url for MapValue
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }

            /** Namespace cloudbuild. */
            namespace cloudbuild {

                /** Namespace v1. */
                namespace v1 {

                    /** Properties of a CloudBuildEvent. */
                    interface ICloudBuildEvent {

                        /** CloudBuildEvent data */
                        data?: (google.events.cloud.cloudbuild.v1.IBuildEventData|null);
                    }

                    /** Represents a CloudBuildEvent. */
                    class CloudBuildEvent implements ICloudBuildEvent {

                        /**
                         * Constructs a new CloudBuildEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.cloudbuild.v1.ICloudBuildEvent);

                        /** CloudBuildEvent data. */
                        public data?: (google.events.cloud.cloudbuild.v1.IBuildEventData|null);

                        /**
                         * Gets the default type url for CloudBuildEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BuildEventData. */
                    interface IBuildEventData {

                        /** BuildEventData id */
                        id?: (string|null);

                        /** BuildEventData projectId */
                        projectId?: (string|null);

                        /** BuildEventData status */
                        status?: (google.events.cloud.cloudbuild.v1.BuildEventData.Status|null);

                        /** BuildEventData statusDetail */
                        statusDetail?: (string|null);

                        /** BuildEventData source */
                        source?: (google.events.cloud.cloudbuild.v1.ISource|null);

                        /** BuildEventData steps */
                        steps?: (google.events.cloud.cloudbuild.v1.IBuildStep[]|null);

                        /** BuildEventData results */
                        results?: (google.events.cloud.cloudbuild.v1.IResults|null);

                        /** BuildEventData createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** BuildEventData startTime */
                        startTime?: (google.protobuf.ITimestamp|null);

                        /** BuildEventData finishTime */
                        finishTime?: (google.protobuf.ITimestamp|null);

                        /** BuildEventData timeout */
                        timeout?: (google.protobuf.IDuration|null);

                        /** BuildEventData images */
                        images?: (string[]|null);

                        /** BuildEventData queueTtl */
                        queueTtl?: (google.protobuf.IDuration|null);

                        /** BuildEventData artifacts */
                        artifacts?: (google.events.cloud.cloudbuild.v1.IArtifacts|null);

                        /** BuildEventData logsBucket */
                        logsBucket?: (string|null);

                        /** BuildEventData sourceProvenance */
                        sourceProvenance?: (google.events.cloud.cloudbuild.v1.ISourceProvenance|null);

                        /** BuildEventData buildTriggerId */
                        buildTriggerId?: (string|null);

                        /** BuildEventData options */
                        options?: (google.events.cloud.cloudbuild.v1.IBuildOptions|null);

                        /** BuildEventData logUrl */
                        logUrl?: (string|null);

                        /** BuildEventData substitutions */
                        substitutions?: ({ [k: string]: string }|null);

                        /** BuildEventData tags */
                        tags?: (string[]|null);

                        /** BuildEventData secrets */
                        secrets?: (google.events.cloud.cloudbuild.v1.ISecret[]|null);

                        /** BuildEventData timing */
                        timing?: ({ [k: string]: google.events.cloud.cloudbuild.v1.ITimeSpan }|null);
                    }

                    /** Represents a BuildEventData. */
                    class BuildEventData implements IBuildEventData {

                        /**
                         * Constructs a new BuildEventData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.cloudbuild.v1.IBuildEventData);

                        /** BuildEventData id. */
                        public id: string;

                        /** BuildEventData projectId. */
                        public projectId: string;

                        /** BuildEventData status. */
                        public status: google.events.cloud.cloudbuild.v1.BuildEventData.Status;

                        /** BuildEventData statusDetail. */
                        public statusDetail: string;

                        /** BuildEventData source. */
                        public source?: (google.events.cloud.cloudbuild.v1.ISource|null);

                        /** BuildEventData steps. */
                        public steps: google.events.cloud.cloudbuild.v1.IBuildStep[];

                        /** BuildEventData results. */
                        public results?: (google.events.cloud.cloudbuild.v1.IResults|null);

                        /** BuildEventData createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** BuildEventData startTime. */
                        public startTime?: (google.protobuf.ITimestamp|null);

                        /** BuildEventData finishTime. */
                        public finishTime?: (google.protobuf.ITimestamp|null);

                        /** BuildEventData timeout. */
                        public timeout?: (google.protobuf.IDuration|null);

                        /** BuildEventData images. */
                        public images: string[];

                        /** BuildEventData queueTtl. */
                        public queueTtl?: (google.protobuf.IDuration|null);

                        /** BuildEventData artifacts. */
                        public artifacts?: (google.events.cloud.cloudbuild.v1.IArtifacts|null);

                        /** BuildEventData logsBucket. */
                        public logsBucket: string;

                        /** BuildEventData sourceProvenance. */
                        public sourceProvenance?: (google.events.cloud.cloudbuild.v1.ISourceProvenance|null);

                        /** BuildEventData buildTriggerId. */
                        public buildTriggerId: string;

                        /** BuildEventData options. */
                        public options?: (google.events.cloud.cloudbuild.v1.IBuildOptions|null);

                        /** BuildEventData logUrl. */
                        public logUrl: string;

                        /** BuildEventData substitutions. */
                        public substitutions: { [k: string]: string };

                        /** BuildEventData tags. */
                        public tags: string[];

                        /** BuildEventData secrets. */
                        public secrets: google.events.cloud.cloudbuild.v1.ISecret[];

                        /** BuildEventData timing. */
                        public timing: { [k: string]: google.events.cloud.cloudbuild.v1.ITimeSpan };

                        /**
                         * Gets the default type url for BuildEventData
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace BuildEventData {

                        /** Status enum. */
                        enum Status {
                            STATUS_UNKNOWN = 0,
                            QUEUED = 1,
                            WORKING = 2,
                            SUCCESS = 3,
                            FAILURE = 4,
                            INTERNAL_ERROR = 5,
                            TIMEOUT = 6,
                            CANCELLED = 7,
                            EXPIRED = 9
                        }
                    }

                    /** Properties of a Source. */
                    interface ISource {

                        /** Source storageSource */
                        storageSource?: (google.events.cloud.cloudbuild.v1.IStorageSource|null);

                        /** Source repoSource */
                        repoSource?: (google.events.cloud.cloudbuild.v1.IRepoSource|null);
                    }

                    /** Represents a Source. */
                    class Source implements ISource {

                        /**
                         * Constructs a new Source.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.cloudbuild.v1.ISource);

                        /** Source storageSource. */
                        public storageSource?: (google.events.cloud.cloudbuild.v1.IStorageSource|null);

                        /** Source repoSource. */
                        public repoSource?: (google.events.cloud.cloudbuild.v1.IRepoSource|null);

                        /** Source source. */
                        public source?: ("storageSource"|"repoSource");

                        /**
                         * Gets the default type url for Source
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a StorageSource. */
                    interface IStorageSource {

                        /** StorageSource bucket */
                        bucket?: (string|null);

                        /** StorageSource object */
                        object?: (string|null);

                        /** StorageSource generation */
                        generation?: (number|Long|null);
                    }

                    /** Represents a StorageSource. */
                    class StorageSource implements IStorageSource {

                        /**
                         * Constructs a new StorageSource.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.cloudbuild.v1.IStorageSource);

                        /** StorageSource bucket. */
                        public bucket: string;

                        /** StorageSource object. */
                        public object: string;

                        /** StorageSource generation. */
                        public generation: (number|Long);

                        /**
                         * Gets the default type url for StorageSource
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RepoSource. */
                    interface IRepoSource {

                        /** RepoSource projectId */
                        projectId?: (string|null);

                        /** RepoSource repoName */
                        repoName?: (string|null);

                        /** RepoSource branchName */
                        branchName?: (string|null);

                        /** RepoSource tagName */
                        tagName?: (string|null);

                        /** RepoSource commitSha */
                        commitSha?: (string|null);

                        /** RepoSource dir */
                        dir?: (string|null);

                        /** RepoSource invertRegex */
                        invertRegex?: (boolean|null);

                        /** RepoSource substitutions */
                        substitutions?: ({ [k: string]: string }|null);
                    }

                    /** Represents a RepoSource. */
                    class RepoSource implements IRepoSource {

                        /**
                         * Constructs a new RepoSource.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.cloudbuild.v1.IRepoSource);

                        /** RepoSource projectId. */
                        public projectId: string;

                        /** RepoSource repoName. */
                        public repoName: string;

                        /** RepoSource branchName. */
                        public branchName?: (string|null);

                        /** RepoSource tagName. */
                        public tagName?: (string|null);

                        /** RepoSource commitSha. */
                        public commitSha?: (string|null);

                        /** RepoSource dir. */
                        public dir: string;

                        /** RepoSource invertRegex. */
                        public invertRegex: boolean;

                        /** RepoSource substitutions. */
                        public substitutions: { [k: string]: string };

                        /** RepoSource revision. */
                        public revision?: ("branchName"|"tagName"|"commitSha");

                        /**
                         * Gets the default type url for RepoSource
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BuildStep. */
                    interface IBuildStep {

                        /** BuildStep name */
                        name?: (string|null);

                        /** BuildStep env */
                        env?: (string[]|null);

                        /** BuildStep args */
                        args?: (string[]|null);

                        /** BuildStep dir */
                        dir?: (string|null);

                        /** BuildStep id */
                        id?: (string|null);

                        /** BuildStep waitFor */
                        waitFor?: (string[]|null);

                        /** BuildStep entrypoint */
                        entrypoint?: (string|null);

                        /** BuildStep secretEnv */
                        secretEnv?: (string[]|null);

                        /** BuildStep volumes */
                        volumes?: (google.events.cloud.cloudbuild.v1.IVolume[]|null);

                        /** BuildStep timing */
                        timing?: (google.events.cloud.cloudbuild.v1.ITimeSpan|null);

                        /** BuildStep pullTiming */
                        pullTiming?: (google.events.cloud.cloudbuild.v1.ITimeSpan|null);

                        /** BuildStep timeout */
                        timeout?: (google.protobuf.IDuration|null);

                        /** BuildStep status */
                        status?: (google.events.cloud.cloudbuild.v1.BuildEventData.Status|null);
                    }

                    /** Represents a BuildStep. */
                    class BuildStep implements IBuildStep {

                        /**
                         * Constructs a new BuildStep.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.cloudbuild.v1.IBuildStep);

                        /** BuildStep name. */
                        public name: string;

                        /** BuildStep env. */
                        public env: string[];

                        /** BuildStep args. */
                        public args: string[];

                        /** BuildStep dir. */
                        public dir: string;

                        /** BuildStep id. */
                        public id: string;

                        /** BuildStep waitFor. */
                        public waitFor: string[];

                        /** BuildStep entrypoint. */
                        public entrypoint: string;

                        /** BuildStep secretEnv. */
                        public secretEnv: string[];

                        /** BuildStep volumes. */
                        public volumes: google.events.cloud.cloudbuild.v1.IVolume[];

                        /** BuildStep timing. */
                        public timing?: (google.events.cloud.cloudbuild.v1.ITimeSpan|null);

                        /** BuildStep pullTiming. */
                        public pullTiming?: (google.events.cloud.cloudbuild.v1.ITimeSpan|null);

                        /** BuildStep timeout. */
                        public timeout?: (google.protobuf.IDuration|null);

                        /** BuildStep status. */
                        public status: google.events.cloud.cloudbuild.v1.BuildEventData.Status;

                        /**
                         * Gets the default type url for BuildStep
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Volume. */
                    interface IVolume {

                        /** Volume name */
                        name?: (string|null);

                        /** Volume path */
                        path?: (string|null);
                    }

                    /** Represents a Volume. */
                    class Volume implements IVolume {

                        /**
                         * Constructs a new Volume.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.cloudbuild.v1.IVolume);

                        /** Volume name. */
                        public name: string;

                        /** Volume path. */
                        public path: string;

                        /**
                         * Gets the default type url for Volume
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Results. */
                    interface IResults {

                        /** Results images */
                        images?: (google.events.cloud.cloudbuild.v1.IBuiltImage[]|null);

                        /** Results buildStepImages */
                        buildStepImages?: (string[]|null);

                        /** Results artifactManifest */
                        artifactManifest?: (string|null);

                        /** Results numArtifacts */
                        numArtifacts?: (number|Long|null);

                        /** Results buildStepOutputs */
                        buildStepOutputs?: (Uint8Array[]|null);

                        /** Results artifactTiming */
                        artifactTiming?: (google.events.cloud.cloudbuild.v1.ITimeSpan|null);
                    }

                    /** Represents a Results. */
                    class Results implements IResults {

                        /**
                         * Constructs a new Results.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.cloudbuild.v1.IResults);

                        /** Results images. */
                        public images: google.events.cloud.cloudbuild.v1.IBuiltImage[];

                        /** Results buildStepImages. */
                        public buildStepImages: string[];

                        /** Results artifactManifest. */
                        public artifactManifest: string;

                        /** Results numArtifacts. */
                        public numArtifacts: (number|Long);

                        /** Results buildStepOutputs. */
                        public buildStepOutputs: Uint8Array[];

                        /** Results artifactTiming. */
                        public artifactTiming?: (google.events.cloud.cloudbuild.v1.ITimeSpan|null);

                        /**
                         * Gets the default type url for Results
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BuiltImage. */
                    interface IBuiltImage {

                        /** BuiltImage name */
                        name?: (string|null);

                        /** BuiltImage digest */
                        digest?: (string|null);

                        /** BuiltImage pushTiming */
                        pushTiming?: (google.events.cloud.cloudbuild.v1.ITimeSpan|null);
                    }

                    /** Represents a BuiltImage. */
                    class BuiltImage implements IBuiltImage {

                        /**
                         * Constructs a new BuiltImage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.cloudbuild.v1.IBuiltImage);

                        /** BuiltImage name. */
                        public name: string;

                        /** BuiltImage digest. */
                        public digest: string;

                        /** BuiltImage pushTiming. */
                        public pushTiming?: (google.events.cloud.cloudbuild.v1.ITimeSpan|null);

                        /**
                         * Gets the default type url for BuiltImage
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an Artifacts. */
                    interface IArtifacts {

                        /** Artifacts images */
                        images?: (string[]|null);

                        /** Artifacts objects */
                        objects?: (google.events.cloud.cloudbuild.v1.Artifacts.IArtifactObjects|null);
                    }

                    /** Represents an Artifacts. */
                    class Artifacts implements IArtifacts {

                        /**
                         * Constructs a new Artifacts.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.cloudbuild.v1.IArtifacts);

                        /** Artifacts images. */
                        public images: string[];

                        /** Artifacts objects. */
                        public objects?: (google.events.cloud.cloudbuild.v1.Artifacts.IArtifactObjects|null);

                        /**
                         * Gets the default type url for Artifacts
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Artifacts {

                        /** Properties of an ArtifactObjects. */
                        interface IArtifactObjects {

                            /** ArtifactObjects location */
                            location?: (string|null);

                            /** ArtifactObjects paths */
                            paths?: (string[]|null);

                            /** ArtifactObjects timing */
                            timing?: (google.events.cloud.cloudbuild.v1.ITimeSpan|null);
                        }

                        /** Represents an ArtifactObjects. */
                        class ArtifactObjects implements IArtifactObjects {

                            /**
                             * Constructs a new ArtifactObjects.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.events.cloud.cloudbuild.v1.Artifacts.IArtifactObjects);

                            /** ArtifactObjects location. */
                            public location: string;

                            /** ArtifactObjects paths. */
                            public paths: string[];

                            /** ArtifactObjects timing. */
                            public timing?: (google.events.cloud.cloudbuild.v1.ITimeSpan|null);

                            /**
                             * Gets the default type url for ArtifactObjects
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a TimeSpan. */
                    interface ITimeSpan {

                        /** TimeSpan startTime */
                        startTime?: (google.protobuf.ITimestamp|null);

                        /** TimeSpan endTime */
                        endTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a TimeSpan. */
                    class TimeSpan implements ITimeSpan {

                        /**
                         * Constructs a new TimeSpan.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.cloudbuild.v1.ITimeSpan);

                        /** TimeSpan startTime. */
                        public startTime?: (google.protobuf.ITimestamp|null);

                        /** TimeSpan endTime. */
                        public endTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Gets the default type url for TimeSpan
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SourceProvenance. */
                    interface ISourceProvenance {

                        /** SourceProvenance resolvedStorageSource */
                        resolvedStorageSource?: (google.events.cloud.cloudbuild.v1.IStorageSource|null);

                        /** SourceProvenance resolvedRepoSource */
                        resolvedRepoSource?: (google.events.cloud.cloudbuild.v1.IRepoSource|null);

                        /** SourceProvenance fileHashes */
                        fileHashes?: ({ [k: string]: google.events.cloud.cloudbuild.v1.IFileHashes }|null);
                    }

                    /** Represents a SourceProvenance. */
                    class SourceProvenance implements ISourceProvenance {

                        /**
                         * Constructs a new SourceProvenance.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.cloudbuild.v1.ISourceProvenance);

                        /** SourceProvenance resolvedStorageSource. */
                        public resolvedStorageSource?: (google.events.cloud.cloudbuild.v1.IStorageSource|null);

                        /** SourceProvenance resolvedRepoSource. */
                        public resolvedRepoSource?: (google.events.cloud.cloudbuild.v1.IRepoSource|null);

                        /** SourceProvenance fileHashes. */
                        public fileHashes: { [k: string]: google.events.cloud.cloudbuild.v1.IFileHashes };

                        /**
                         * Gets the default type url for SourceProvenance
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FileHashes. */
                    interface IFileHashes {

                        /** FileHashes fileHash */
                        fileHash?: (google.events.cloud.cloudbuild.v1.IHash[]|null);
                    }

                    /** Represents a FileHashes. */
                    class FileHashes implements IFileHashes {

                        /**
                         * Constructs a new FileHashes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.cloudbuild.v1.IFileHashes);

                        /** FileHashes fileHash. */
                        public fileHash: google.events.cloud.cloudbuild.v1.IHash[];

                        /**
                         * Gets the default type url for FileHashes
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Hash. */
                    interface IHash {

                        /** Hash type */
                        type?: (google.events.cloud.cloudbuild.v1.Hash.HashType|null);

                        /** Hash value */
                        value?: (Uint8Array|null);
                    }

                    /** Represents a Hash. */
                    class Hash implements IHash {

                        /**
                         * Constructs a new Hash.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.cloudbuild.v1.IHash);

                        /** Hash type. */
                        public type: google.events.cloud.cloudbuild.v1.Hash.HashType;

                        /** Hash value. */
                        public value: Uint8Array;

                        /**
                         * Gets the default type url for Hash
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Hash {

                        /** HashType enum. */
                        enum HashType {
                            NONE = 0,
                            SHA256 = 1,
                            MD5 = 2
                        }
                    }

                    /** Properties of a Secret. */
                    interface ISecret {

                        /** Secret kmsKeyName */
                        kmsKeyName?: (string|null);

                        /** Secret secretEnv */
                        secretEnv?: ({ [k: string]: Uint8Array }|null);
                    }

                    /** Represents a Secret. */
                    class Secret implements ISecret {

                        /**
                         * Constructs a new Secret.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.cloudbuild.v1.ISecret);

                        /** Secret kmsKeyName. */
                        public kmsKeyName: string;

                        /** Secret secretEnv. */
                        public secretEnv: { [k: string]: Uint8Array };

                        /**
                         * Gets the default type url for Secret
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BuildOptions. */
                    interface IBuildOptions {

                        /** BuildOptions sourceProvenanceHash */
                        sourceProvenanceHash?: (google.events.cloud.cloudbuild.v1.Hash.HashType[]|null);

                        /** BuildOptions requestedVerifyOption */
                        requestedVerifyOption?: (google.events.cloud.cloudbuild.v1.BuildOptions.VerifyOption|null);

                        /** BuildOptions machineType */
                        machineType?: (google.events.cloud.cloudbuild.v1.BuildOptions.MachineType|null);

                        /** BuildOptions diskSizeGb */
                        diskSizeGb?: (number|Long|null);

                        /** BuildOptions substitutionOption */
                        substitutionOption?: (google.events.cloud.cloudbuild.v1.BuildOptions.SubstitutionOption|null);

                        /** BuildOptions logStreamingOption */
                        logStreamingOption?: (google.events.cloud.cloudbuild.v1.BuildOptions.LogStreamingOption|null);

                        /** BuildOptions workerPool */
                        workerPool?: (string|null);

                        /** BuildOptions logging */
                        logging?: (google.events.cloud.cloudbuild.v1.BuildOptions.LoggingMode|null);

                        /** BuildOptions env */
                        env?: (string[]|null);

                        /** BuildOptions secretEnv */
                        secretEnv?: (string[]|null);

                        /** BuildOptions volumes */
                        volumes?: (google.events.cloud.cloudbuild.v1.IVolume[]|null);
                    }

                    /** Represents a BuildOptions. */
                    class BuildOptions implements IBuildOptions {

                        /**
                         * Constructs a new BuildOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.cloudbuild.v1.IBuildOptions);

                        /** BuildOptions sourceProvenanceHash. */
                        public sourceProvenanceHash: google.events.cloud.cloudbuild.v1.Hash.HashType[];

                        /** BuildOptions requestedVerifyOption. */
                        public requestedVerifyOption: google.events.cloud.cloudbuild.v1.BuildOptions.VerifyOption;

                        /** BuildOptions machineType. */
                        public machineType: google.events.cloud.cloudbuild.v1.BuildOptions.MachineType;

                        /** BuildOptions diskSizeGb. */
                        public diskSizeGb: (number|Long);

                        /** BuildOptions substitutionOption. */
                        public substitutionOption: google.events.cloud.cloudbuild.v1.BuildOptions.SubstitutionOption;

                        /** BuildOptions logStreamingOption. */
                        public logStreamingOption: google.events.cloud.cloudbuild.v1.BuildOptions.LogStreamingOption;

                        /** BuildOptions workerPool. */
                        public workerPool: string;

                        /** BuildOptions logging. */
                        public logging: google.events.cloud.cloudbuild.v1.BuildOptions.LoggingMode;

                        /** BuildOptions env. */
                        public env: string[];

                        /** BuildOptions secretEnv. */
                        public secretEnv: string[];

                        /** BuildOptions volumes. */
                        public volumes: google.events.cloud.cloudbuild.v1.IVolume[];

                        /**
                         * Gets the default type url for BuildOptions
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace BuildOptions {

                        /** VerifyOption enum. */
                        enum VerifyOption {
                            NOT_VERIFIED = 0,
                            VERIFIED = 1
                        }

                        /** MachineType enum. */
                        enum MachineType {
                            UNSPECIFIED = 0,
                            N1_HIGHCPU_8 = 1,
                            N1_HIGHCPU_32 = 2
                        }

                        /** SubstitutionOption enum. */
                        enum SubstitutionOption {
                            MUST_MATCH = 0,
                            ALLOW_LOOSE = 1
                        }

                        /** LogStreamingOption enum. */
                        enum LogStreamingOption {
                            STREAM_DEFAULT = 0,
                            STREAM_ON = 1,
                            STREAM_OFF = 2
                        }

                        /** LoggingMode enum. */
                        enum LoggingMode {
                            LOGGING_UNSPECIFIED = 0,
                            LEGACY = 1,
                            GCS_ONLY = 2
                        }
                    }
                }
            }

            /** Namespace audit. */
            namespace audit {

                /** Namespace v1. */
                namespace v1 {

                    /** Properties of an AuditLogWrittenEvent. */
                    interface IAuditLogWrittenEvent {

                        /** AuditLogWrittenEvent data */
                        data?: (google.events.cloud.audit.v1.ILogEntryData|null);
                    }

                    /** Represents an AuditLogWrittenEvent. */
                    class AuditLogWrittenEvent implements IAuditLogWrittenEvent {

                        /**
                         * Constructs a new AuditLogWrittenEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.audit.v1.IAuditLogWrittenEvent);

                        /** AuditLogWrittenEvent data. */
                        public data?: (google.events.cloud.audit.v1.ILogEntryData|null);

                        /**
                         * Gets the default type url for AuditLogWrittenEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a LogEntryData. */
                    interface ILogEntryData {

                        /** LogEntryData logName */
                        logName?: (string|null);

                        /** LogEntryData resource */
                        resource?: (google.api.IMonitoredResource|null);

                        /** LogEntryData protoPayload */
                        protoPayload?: (google.events.cloud.audit.v1.IAuditLog|null);

                        /** LogEntryData insertId */
                        insertId?: (string|null);

                        /** LogEntryData labels */
                        labels?: ({ [k: string]: string }|null);

                        /** LogEntryData operation */
                        operation?: (google.events.cloud.audit.v1.ILogEntryOperation|null);

                        /** LogEntryData timestamp */
                        timestamp?: (google.protobuf.ITimestamp|null);

                        /** LogEntryData receiveTimestamp */
                        receiveTimestamp?: (google.protobuf.ITimestamp|null);

                        /** LogEntryData severity */
                        severity?: (google.events.cloud.audit.v1.LogSeverity|null);

                        /** LogEntryData trace */
                        trace?: (string|null);

                        /** LogEntryData spanId */
                        spanId?: (string|null);

                        /** LogEntryData split */
                        split?: (google.events.cloud.audit.v1.ILogSplit|null);
                    }

                    /** Represents a LogEntryData. */
                    class LogEntryData implements ILogEntryData {

                        /**
                         * Constructs a new LogEntryData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.audit.v1.ILogEntryData);

                        /** LogEntryData logName. */
                        public logName: string;

                        /** LogEntryData resource. */
                        public resource?: (google.api.IMonitoredResource|null);

                        /** LogEntryData protoPayload. */
                        public protoPayload?: (google.events.cloud.audit.v1.IAuditLog|null);

                        /** LogEntryData insertId. */
                        public insertId: string;

                        /** LogEntryData labels. */
                        public labels: { [k: string]: string };

                        /** LogEntryData operation. */
                        public operation?: (google.events.cloud.audit.v1.ILogEntryOperation|null);

                        /** LogEntryData timestamp. */
                        public timestamp?: (google.protobuf.ITimestamp|null);

                        /** LogEntryData receiveTimestamp. */
                        public receiveTimestamp?: (google.protobuf.ITimestamp|null);

                        /** LogEntryData severity. */
                        public severity: google.events.cloud.audit.v1.LogSeverity;

                        /** LogEntryData trace. */
                        public trace: string;

                        /** LogEntryData spanId. */
                        public spanId: string;

                        /** LogEntryData split. */
                        public split?: (google.events.cloud.audit.v1.ILogSplit|null);

                        /**
                         * Gets the default type url for LogEntryData
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a LogEntryOperation. */
                    interface ILogEntryOperation {

                        /** LogEntryOperation id */
                        id?: (string|null);

                        /** LogEntryOperation producer */
                        producer?: (string|null);

                        /** LogEntryOperation first */
                        first?: (boolean|null);

                        /** LogEntryOperation last */
                        last?: (boolean|null);
                    }

                    /** Represents a LogEntryOperation. */
                    class LogEntryOperation implements ILogEntryOperation {

                        /**
                         * Constructs a new LogEntryOperation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.audit.v1.ILogEntryOperation);

                        /** LogEntryOperation id. */
                        public id: string;

                        /** LogEntryOperation producer. */
                        public producer: string;

                        /** LogEntryOperation first. */
                        public first: boolean;

                        /** LogEntryOperation last. */
                        public last: boolean;

                        /**
                         * Gets the default type url for LogEntryOperation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** LogSeverity enum. */
                    enum LogSeverity {
                        DEFAULT = 0,
                        DEBUG = 100,
                        INFO = 200,
                        NOTICE = 300,
                        WARNING = 400,
                        ERROR = 500,
                        CRITICAL = 600,
                        ALERT = 700,
                        EMERGENCY = 800
                    }

                    /** Properties of an AuditLog. */
                    interface IAuditLog {

                        /** AuditLog serviceName */
                        serviceName?: (string|null);

                        /** AuditLog methodName */
                        methodName?: (string|null);

                        /** AuditLog resourceName */
                        resourceName?: (string|null);

                        /** AuditLog resourceLocation */
                        resourceLocation?: (google.events.cloud.audit.v1.IResourceLocation|null);

                        /** AuditLog resourceOriginalState */
                        resourceOriginalState?: (google.protobuf.IStruct|null);

                        /** AuditLog numResponseItems */
                        numResponseItems?: (number|Long|null);

                        /** AuditLog status */
                        status?: (google.rpc.IStatus|null);

                        /** AuditLog authenticationInfo */
                        authenticationInfo?: (google.events.cloud.audit.v1.IAuthenticationInfo|null);

                        /** AuditLog authorizationInfo */
                        authorizationInfo?: (google.events.cloud.audit.v1.IAuthorizationInfo[]|null);

                        /** AuditLog requestMetadata */
                        requestMetadata?: (google.events.cloud.audit.v1.IRequestMetadata|null);

                        /** AuditLog request */
                        request?: (google.protobuf.IStruct|null);

                        /** AuditLog response */
                        response?: (google.protobuf.IStruct|null);

                        /** AuditLog metadata */
                        metadata?: (google.protobuf.IStruct|null);

                        /** AuditLog serviceData */
                        serviceData?: (google.protobuf.IStruct|null);
                    }

                    /** Represents an AuditLog. */
                    class AuditLog implements IAuditLog {

                        /**
                         * Constructs a new AuditLog.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.audit.v1.IAuditLog);

                        /** AuditLog serviceName. */
                        public serviceName: string;

                        /** AuditLog methodName. */
                        public methodName: string;

                        /** AuditLog resourceName. */
                        public resourceName: string;

                        /** AuditLog resourceLocation. */
                        public resourceLocation?: (google.events.cloud.audit.v1.IResourceLocation|null);

                        /** AuditLog resourceOriginalState. */
                        public resourceOriginalState?: (google.protobuf.IStruct|null);

                        /** AuditLog numResponseItems. */
                        public numResponseItems: (number|Long);

                        /** AuditLog status. */
                        public status?: (google.rpc.IStatus|null);

                        /** AuditLog authenticationInfo. */
                        public authenticationInfo?: (google.events.cloud.audit.v1.IAuthenticationInfo|null);

                        /** AuditLog authorizationInfo. */
                        public authorizationInfo: google.events.cloud.audit.v1.IAuthorizationInfo[];

                        /** AuditLog requestMetadata. */
                        public requestMetadata?: (google.events.cloud.audit.v1.IRequestMetadata|null);

                        /** AuditLog request. */
                        public request?: (google.protobuf.IStruct|null);

                        /** AuditLog response. */
                        public response?: (google.protobuf.IStruct|null);

                        /** AuditLog metadata. */
                        public metadata?: (google.protobuf.IStruct|null);

                        /** AuditLog serviceData. */
                        public serviceData?: (google.protobuf.IStruct|null);

                        /**
                         * Gets the default type url for AuditLog
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AuthenticationInfo. */
                    interface IAuthenticationInfo {

                        /** AuthenticationInfo principalEmail */
                        principalEmail?: (string|null);

                        /** AuthenticationInfo authoritySelector */
                        authoritySelector?: (string|null);

                        /** AuthenticationInfo thirdPartyPrincipal */
                        thirdPartyPrincipal?: (google.protobuf.IStruct|null);

                        /** AuthenticationInfo serviceAccountKeyName */
                        serviceAccountKeyName?: (string|null);

                        /** AuthenticationInfo serviceAccountDelegationInfo */
                        serviceAccountDelegationInfo?: (google.events.cloud.audit.v1.IServiceAccountDelegationInfo[]|null);

                        /** AuthenticationInfo principalSubject */
                        principalSubject?: (string|null);
                    }

                    /** Represents an AuthenticationInfo. */
                    class AuthenticationInfo implements IAuthenticationInfo {

                        /**
                         * Constructs a new AuthenticationInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.audit.v1.IAuthenticationInfo);

                        /** AuthenticationInfo principalEmail. */
                        public principalEmail: string;

                        /** AuthenticationInfo authoritySelector. */
                        public authoritySelector: string;

                        /** AuthenticationInfo thirdPartyPrincipal. */
                        public thirdPartyPrincipal?: (google.protobuf.IStruct|null);

                        /** AuthenticationInfo serviceAccountKeyName. */
                        public serviceAccountKeyName: string;

                        /** AuthenticationInfo serviceAccountDelegationInfo. */
                        public serviceAccountDelegationInfo: google.events.cloud.audit.v1.IServiceAccountDelegationInfo[];

                        /** AuthenticationInfo principalSubject. */
                        public principalSubject: string;

                        /**
                         * Gets the default type url for AuthenticationInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AuthorizationInfo. */
                    interface IAuthorizationInfo {

                        /** AuthorizationInfo resource */
                        resource?: (string|null);

                        /** AuthorizationInfo permission */
                        permission?: (string|null);

                        /** AuthorizationInfo granted */
                        granted?: (boolean|null);

                        /** AuthorizationInfo resourceAttributes */
                        resourceAttributes?: (google.rpc.context.AttributeContext.IResource|null);
                    }

                    /** Represents an AuthorizationInfo. */
                    class AuthorizationInfo implements IAuthorizationInfo {

                        /**
                         * Constructs a new AuthorizationInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.audit.v1.IAuthorizationInfo);

                        /** AuthorizationInfo resource. */
                        public resource: string;

                        /** AuthorizationInfo permission. */
                        public permission: string;

                        /** AuthorizationInfo granted. */
                        public granted: boolean;

                        /** AuthorizationInfo resourceAttributes. */
                        public resourceAttributes?: (google.rpc.context.AttributeContext.IResource|null);

                        /**
                         * Gets the default type url for AuthorizationInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RequestMetadata. */
                    interface IRequestMetadata {

                        /** RequestMetadata callerIp */
                        callerIp?: (string|null);

                        /** RequestMetadata callerSuppliedUserAgent */
                        callerSuppliedUserAgent?: (string|null);

                        /** RequestMetadata callerNetwork */
                        callerNetwork?: (string|null);

                        /** RequestMetadata requestAttributes */
                        requestAttributes?: (google.rpc.context.AttributeContext.IRequest|null);

                        /** RequestMetadata destinationAttributes */
                        destinationAttributes?: (google.rpc.context.AttributeContext.IPeer|null);
                    }

                    /** Represents a RequestMetadata. */
                    class RequestMetadata implements IRequestMetadata {

                        /**
                         * Constructs a new RequestMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.audit.v1.IRequestMetadata);

                        /** RequestMetadata callerIp. */
                        public callerIp: string;

                        /** RequestMetadata callerSuppliedUserAgent. */
                        public callerSuppliedUserAgent: string;

                        /** RequestMetadata callerNetwork. */
                        public callerNetwork: string;

                        /** RequestMetadata requestAttributes. */
                        public requestAttributes?: (google.rpc.context.AttributeContext.IRequest|null);

                        /** RequestMetadata destinationAttributes. */
                        public destinationAttributes?: (google.rpc.context.AttributeContext.IPeer|null);

                        /**
                         * Gets the default type url for RequestMetadata
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ResourceLocation. */
                    interface IResourceLocation {

                        /** ResourceLocation currentLocations */
                        currentLocations?: (string[]|null);

                        /** ResourceLocation originalLocations */
                        originalLocations?: (string[]|null);
                    }

                    /** Represents a ResourceLocation. */
                    class ResourceLocation implements IResourceLocation {

                        /**
                         * Constructs a new ResourceLocation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.audit.v1.IResourceLocation);

                        /** ResourceLocation currentLocations. */
                        public currentLocations: string[];

                        /** ResourceLocation originalLocations. */
                        public originalLocations: string[];

                        /**
                         * Gets the default type url for ResourceLocation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ServiceAccountDelegationInfo. */
                    interface IServiceAccountDelegationInfo {

                        /** ServiceAccountDelegationInfo firstPartyPrincipal */
                        firstPartyPrincipal?: (google.events.cloud.audit.v1.ServiceAccountDelegationInfo.IFirstPartyPrincipal|null);

                        /** ServiceAccountDelegationInfo thirdPartyPrincipal */
                        thirdPartyPrincipal?: (google.events.cloud.audit.v1.ServiceAccountDelegationInfo.IThirdPartyPrincipal|null);
                    }

                    /** Represents a ServiceAccountDelegationInfo. */
                    class ServiceAccountDelegationInfo implements IServiceAccountDelegationInfo {

                        /**
                         * Constructs a new ServiceAccountDelegationInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.audit.v1.IServiceAccountDelegationInfo);

                        /** ServiceAccountDelegationInfo firstPartyPrincipal. */
                        public firstPartyPrincipal?: (google.events.cloud.audit.v1.ServiceAccountDelegationInfo.IFirstPartyPrincipal|null);

                        /** ServiceAccountDelegationInfo thirdPartyPrincipal. */
                        public thirdPartyPrincipal?: (google.events.cloud.audit.v1.ServiceAccountDelegationInfo.IThirdPartyPrincipal|null);

                        /** ServiceAccountDelegationInfo Authority. */
                        public Authority?: ("firstPartyPrincipal"|"thirdPartyPrincipal");

                        /**
                         * Gets the default type url for ServiceAccountDelegationInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ServiceAccountDelegationInfo {

                        /** Properties of a FirstPartyPrincipal. */
                        interface IFirstPartyPrincipal {

                            /** FirstPartyPrincipal principalEmail */
                            principalEmail?: (string|null);

                            /** FirstPartyPrincipal serviceMetadata */
                            serviceMetadata?: (google.protobuf.IStruct|null);
                        }

                        /** Represents a FirstPartyPrincipal. */
                        class FirstPartyPrincipal implements IFirstPartyPrincipal {

                            /**
                             * Constructs a new FirstPartyPrincipal.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.events.cloud.audit.v1.ServiceAccountDelegationInfo.IFirstPartyPrincipal);

                            /** FirstPartyPrincipal principalEmail. */
                            public principalEmail: string;

                            /** FirstPartyPrincipal serviceMetadata. */
                            public serviceMetadata?: (google.protobuf.IStruct|null);

                            /**
                             * Gets the default type url for FirstPartyPrincipal
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a ThirdPartyPrincipal. */
                        interface IThirdPartyPrincipal {

                            /** ThirdPartyPrincipal thirdPartyClaims */
                            thirdPartyClaims?: (google.protobuf.IStruct|null);
                        }

                        /** Represents a ThirdPartyPrincipal. */
                        class ThirdPartyPrincipal implements IThirdPartyPrincipal {

                            /**
                             * Constructs a new ThirdPartyPrincipal.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.events.cloud.audit.v1.ServiceAccountDelegationInfo.IThirdPartyPrincipal);

                            /** ThirdPartyPrincipal thirdPartyClaims. */
                            public thirdPartyClaims?: (google.protobuf.IStruct|null);

                            /**
                             * Gets the default type url for ThirdPartyPrincipal
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a LogSplit. */
                    interface ILogSplit {

                        /** LogSplit uid */
                        uid?: (string|null);

                        /** LogSplit index */
                        index?: (number|null);

                        /** LogSplit totalSplits */
                        totalSplits?: (number|null);
                    }

                    /** Represents a LogSplit. */
                    class LogSplit implements ILogSplit {

                        /**
                         * Constructs a new LogSplit.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.events.cloud.audit.v1.ILogSplit);

                        /** LogSplit uid. */
                        public uid: string;

                        /** LogSplit index. */
                        public index: number;

                        /** LogSplit totalSplits. */
                        public totalSplits: number;

                        /**
                         * Gets the default type url for LogSplit
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }
        }
    }

    /** Namespace type. */
    namespace type {

        /** Properties of a TimeOfDay. */
        interface ITimeOfDay {

            /** TimeOfDay hours */
            hours?: (number|null);

            /** TimeOfDay minutes */
            minutes?: (number|null);

            /** TimeOfDay seconds */
            seconds?: (number|null);

            /** TimeOfDay nanos */
            nanos?: (number|null);
        }

        /** Represents a TimeOfDay. */
        class TimeOfDay implements ITimeOfDay {

            /**
             * Constructs a new TimeOfDay.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.ITimeOfDay);

            /** TimeOfDay hours. */
            public hours: number;

            /** TimeOfDay minutes. */
            public minutes: number;

            /** TimeOfDay seconds. */
            public seconds: number;

            /** TimeOfDay nanos. */
            public nanos: number;

            /**
             * Gets the default type url for TimeOfDay
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Quaternion. */
        interface IQuaternion {

            /** Quaternion x */
            x?: (number|null);

            /** Quaternion y */
            y?: (number|null);

            /** Quaternion z */
            z?: (number|null);

            /** Quaternion w */
            w?: (number|null);
        }

        /** Represents a Quaternion. */
        class Quaternion implements IQuaternion {

            /**
             * Constructs a new Quaternion.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IQuaternion);

            /** Quaternion x. */
            public x: number;

            /** Quaternion y. */
            public y: number;

            /** Quaternion z. */
            public z: number;

            /** Quaternion w. */
            public w: number;

            /**
             * Gets the default type url for Quaternion
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PostalAddress. */
        interface IPostalAddress {

            /** PostalAddress revision */
            revision?: (number|null);

            /** PostalAddress regionCode */
            regionCode?: (string|null);

            /** PostalAddress languageCode */
            languageCode?: (string|null);

            /** PostalAddress postalCode */
            postalCode?: (string|null);

            /** PostalAddress sortingCode */
            sortingCode?: (string|null);

            /** PostalAddress administrativeArea */
            administrativeArea?: (string|null);

            /** PostalAddress locality */
            locality?: (string|null);

            /** PostalAddress sublocality */
            sublocality?: (string|null);

            /** PostalAddress addressLines */
            addressLines?: (string[]|null);

            /** PostalAddress recipients */
            recipients?: (string[]|null);

            /** PostalAddress organization */
            organization?: (string|null);
        }

        /** Represents a PostalAddress. */
        class PostalAddress implements IPostalAddress {

            /**
             * Constructs a new PostalAddress.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IPostalAddress);

            /** PostalAddress revision. */
            public revision: number;

            /** PostalAddress regionCode. */
            public regionCode: string;

            /** PostalAddress languageCode. */
            public languageCode: string;

            /** PostalAddress postalCode. */
            public postalCode: string;

            /** PostalAddress sortingCode. */
            public sortingCode: string;

            /** PostalAddress administrativeArea. */
            public administrativeArea: string;

            /** PostalAddress locality. */
            public locality: string;

            /** PostalAddress sublocality. */
            public sublocality: string;

            /** PostalAddress addressLines. */
            public addressLines: string[];

            /** PostalAddress recipients. */
            public recipients: string[];

            /** PostalAddress organization. */
            public organization: string;

            /**
             * Gets the default type url for PostalAddress
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Month enum. */
        enum Month {
            MONTH_UNSPECIFIED = 0,
            JANUARY = 1,
            FEBRUARY = 2,
            MARCH = 3,
            APRIL = 4,
            MAY = 5,
            JUNE = 6,
            JULY = 7,
            AUGUST = 8,
            SEPTEMBER = 9,
            OCTOBER = 10,
            NOVEMBER = 11,
            DECEMBER = 12
        }

        /** Properties of a Money. */
        interface IMoney {

            /** Money currencyCode */
            currencyCode?: (string|null);

            /** Money units */
            units?: (number|Long|null);

            /** Money nanos */
            nanos?: (number|null);
        }

        /** Represents a Money. */
        class Money implements IMoney {

            /**
             * Constructs a new Money.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IMoney);

            /** Money currencyCode. */
            public currencyCode: string;

            /** Money units. */
            public units: (number|Long);

            /** Money nanos. */
            public nanos: number;

            /**
             * Gets the default type url for Money
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LatLng. */
        interface ILatLng {

            /** LatLng latitude */
            latitude?: (number|null);

            /** LatLng longitude */
            longitude?: (number|null);
        }

        /** Represents a LatLng. */
        class LatLng implements ILatLng {

            /**
             * Constructs a new LatLng.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.ILatLng);

            /** LatLng latitude. */
            public latitude: number;

            /** LatLng longitude. */
            public longitude: number;

            /**
             * Gets the default type url for LatLng
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Fraction. */
        interface IFraction {

            /** Fraction numerator */
            numerator?: (number|Long|null);

            /** Fraction denominator */
            denominator?: (number|Long|null);
        }

        /** Represents a Fraction. */
        class Fraction implements IFraction {

            /**
             * Constructs a new Fraction.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IFraction);

            /** Fraction numerator. */
            public numerator: (number|Long);

            /** Fraction denominator. */
            public denominator: (number|Long);

            /**
             * Gets the default type url for Fraction
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Expr. */
        interface IExpr {

            /** Expr expression */
            expression?: (string|null);

            /** Expr title */
            title?: (string|null);

            /** Expr description */
            description?: (string|null);

            /** Expr location */
            location?: (string|null);
        }

        /** Represents an Expr. */
        class Expr implements IExpr {

            /**
             * Constructs a new Expr.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IExpr);

            /** Expr expression. */
            public expression: string;

            /** Expr title. */
            public title: string;

            /** Expr description. */
            public description: string;

            /** Expr location. */
            public location: string;

            /**
             * Gets the default type url for Expr
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** DayOfWeek enum. */
        enum DayOfWeek {
            DAY_OF_WEEK_UNSPECIFIED = 0,
            MONDAY = 1,
            TUESDAY = 2,
            WEDNESDAY = 3,
            THURSDAY = 4,
            FRIDAY = 5,
            SATURDAY = 6,
            SUNDAY = 7
        }

        /** Properties of a DateTime. */
        interface IDateTime {

            /** DateTime year */
            year?: (number|null);

            /** DateTime month */
            month?: (number|null);

            /** DateTime day */
            day?: (number|null);

            /** DateTime hours */
            hours?: (number|null);

            /** DateTime minutes */
            minutes?: (number|null);

            /** DateTime seconds */
            seconds?: (number|null);

            /** DateTime nanos */
            nanos?: (number|null);

            /** DateTime utcOffset */
            utcOffset?: (google.protobuf.IDuration|null);

            /** DateTime timeZone */
            timeZone?: (google.type.ITimeZone|null);
        }

        /** Represents a DateTime. */
        class DateTime implements IDateTime {

            /**
             * Constructs a new DateTime.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IDateTime);

            /** DateTime year. */
            public year: number;

            /** DateTime month. */
            public month: number;

            /** DateTime day. */
            public day: number;

            /** DateTime hours. */
            public hours: number;

            /** DateTime minutes. */
            public minutes: number;

            /** DateTime seconds. */
            public seconds: number;

            /** DateTime nanos. */
            public nanos: number;

            /** DateTime utcOffset. */
            public utcOffset?: (google.protobuf.IDuration|null);

            /** DateTime timeZone. */
            public timeZone?: (google.type.ITimeZone|null);

            /** DateTime timeOffset. */
            public timeOffset?: ("utcOffset"|"timeZone");

            /**
             * Gets the default type url for DateTime
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TimeZone. */
        interface ITimeZone {

            /** TimeZone id */
            id?: (string|null);

            /** TimeZone version */
            version?: (string|null);
        }

        /** Represents a TimeZone. */
        class TimeZone implements ITimeZone {

            /**
             * Constructs a new TimeZone.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.ITimeZone);

            /** TimeZone id. */
            public id: string;

            /** TimeZone version. */
            public version: string;

            /**
             * Gets the default type url for TimeZone
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Date. */
        interface IDate {

            /** Date year */
            year?: (number|null);

            /** Date month */
            month?: (number|null);

            /** Date day */
            day?: (number|null);
        }

        /** Represents a Date. */
        class Date implements IDate {

            /**
             * Constructs a new Date.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IDate);

            /** Date year. */
            public year: number;

            /** Date month. */
            public month: number;

            /** Date day. */
            public day: number;

            /**
             * Gets the default type url for Date
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Color. */
        interface IColor {

            /** Color red */
            red?: (number|null);

            /** Color green */
            green?: (number|null);

            /** Color blue */
            blue?: (number|null);

            /** Color alpha */
            alpha?: (google.protobuf.IFloatValue|null);
        }

        /** Represents a Color. */
        class Color implements IColor {

            /**
             * Constructs a new Color.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IColor);

            /** Color red. */
            public red: number;

            /** Color green. */
            public green: number;

            /** Color blue. */
            public blue: number;

            /** Color alpha. */
            public alpha?: (google.protobuf.IFloatValue|null);

            /**
             * Gets the default type url for Color
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** CalendarPeriod enum. */
        enum CalendarPeriod {
            CALENDAR_PERIOD_UNSPECIFIED = 0,
            DAY = 1,
            WEEK = 2,
            FORTNIGHT = 3,
            MONTH = 4,
            QUARTER = 5,
            HALF = 6,
            YEAR = 7
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Gets the default type url for Status
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RetryInfo. */
        interface IRetryInfo {

            /** RetryInfo retryDelay */
            retryDelay?: (google.protobuf.IDuration|null);
        }

        /** Represents a RetryInfo. */
        class RetryInfo implements IRetryInfo {

            /**
             * Constructs a new RetryInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IRetryInfo);

            /** RetryInfo retryDelay. */
            public retryDelay?: (google.protobuf.IDuration|null);

            /**
             * Gets the default type url for RetryInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DebugInfo. */
        interface IDebugInfo {

            /** DebugInfo stackEntries */
            stackEntries?: (string[]|null);

            /** DebugInfo detail */
            detail?: (string|null);
        }

        /** Represents a DebugInfo. */
        class DebugInfo implements IDebugInfo {

            /**
             * Constructs a new DebugInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IDebugInfo);

            /** DebugInfo stackEntries. */
            public stackEntries: string[];

            /** DebugInfo detail. */
            public detail: string;

            /**
             * Gets the default type url for DebugInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a QuotaFailure. */
        interface IQuotaFailure {

            /** QuotaFailure violations */
            violations?: (google.rpc.QuotaFailure.IViolation[]|null);
        }

        /** Represents a QuotaFailure. */
        class QuotaFailure implements IQuotaFailure {

            /**
             * Constructs a new QuotaFailure.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IQuotaFailure);

            /** QuotaFailure violations. */
            public violations: google.rpc.QuotaFailure.IViolation[];

            /**
             * Gets the default type url for QuotaFailure
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace QuotaFailure {

            /** Properties of a Violation. */
            interface IViolation {

                /** Violation subject */
                subject?: (string|null);

                /** Violation description */
                description?: (string|null);
            }

            /** Represents a Violation. */
            class Violation implements IViolation {

                /**
                 * Constructs a new Violation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.rpc.QuotaFailure.IViolation);

                /** Violation subject. */
                public subject: string;

                /** Violation description. */
                public description: string;

                /**
                 * Gets the default type url for Violation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an ErrorInfo. */
        interface IErrorInfo {

            /** ErrorInfo reason */
            reason?: (string|null);

            /** ErrorInfo domain */
            domain?: (string|null);

            /** ErrorInfo metadata */
            metadata?: ({ [k: string]: string }|null);
        }

        /** Represents an ErrorInfo. */
        class ErrorInfo implements IErrorInfo {

            /**
             * Constructs a new ErrorInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IErrorInfo);

            /** ErrorInfo reason. */
            public reason: string;

            /** ErrorInfo domain. */
            public domain: string;

            /** ErrorInfo metadata. */
            public metadata: { [k: string]: string };

            /**
             * Gets the default type url for ErrorInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PreconditionFailure. */
        interface IPreconditionFailure {

            /** PreconditionFailure violations */
            violations?: (google.rpc.PreconditionFailure.IViolation[]|null);
        }

        /** Represents a PreconditionFailure. */
        class PreconditionFailure implements IPreconditionFailure {

            /**
             * Constructs a new PreconditionFailure.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IPreconditionFailure);

            /** PreconditionFailure violations. */
            public violations: google.rpc.PreconditionFailure.IViolation[];

            /**
             * Gets the default type url for PreconditionFailure
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace PreconditionFailure {

            /** Properties of a Violation. */
            interface IViolation {

                /** Violation type */
                type?: (string|null);

                /** Violation subject */
                subject?: (string|null);

                /** Violation description */
                description?: (string|null);
            }

            /** Represents a Violation. */
            class Violation implements IViolation {

                /**
                 * Constructs a new Violation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.rpc.PreconditionFailure.IViolation);

                /** Violation type. */
                public type: string;

                /** Violation subject. */
                public subject: string;

                /** Violation description. */
                public description: string;

                /**
                 * Gets the default type url for Violation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a BadRequest. */
        interface IBadRequest {

            /** BadRequest fieldViolations */
            fieldViolations?: (google.rpc.BadRequest.IFieldViolation[]|null);
        }

        /** Represents a BadRequest. */
        class BadRequest implements IBadRequest {

            /**
             * Constructs a new BadRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IBadRequest);

            /** BadRequest fieldViolations. */
            public fieldViolations: google.rpc.BadRequest.IFieldViolation[];

            /**
             * Gets the default type url for BadRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace BadRequest {

            /** Properties of a FieldViolation. */
            interface IFieldViolation {

                /** FieldViolation field */
                field?: (string|null);

                /** FieldViolation description */
                description?: (string|null);
            }

            /** Represents a FieldViolation. */
            class FieldViolation implements IFieldViolation {

                /**
                 * Constructs a new FieldViolation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.rpc.BadRequest.IFieldViolation);

                /** FieldViolation field. */
                public field: string;

                /** FieldViolation description. */
                public description: string;

                /**
                 * Gets the default type url for FieldViolation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a RequestInfo. */
        interface IRequestInfo {

            /** RequestInfo requestId */
            requestId?: (string|null);

            /** RequestInfo servingData */
            servingData?: (string|null);
        }

        /** Represents a RequestInfo. */
        class RequestInfo implements IRequestInfo {

            /**
             * Constructs a new RequestInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IRequestInfo);

            /** RequestInfo requestId. */
            public requestId: string;

            /** RequestInfo servingData. */
            public servingData: string;

            /**
             * Gets the default type url for RequestInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ResourceInfo. */
        interface IResourceInfo {

            /** ResourceInfo resourceType */
            resourceType?: (string|null);

            /** ResourceInfo resourceName */
            resourceName?: (string|null);

            /** ResourceInfo owner */
            owner?: (string|null);

            /** ResourceInfo description */
            description?: (string|null);
        }

        /** Represents a ResourceInfo. */
        class ResourceInfo implements IResourceInfo {

            /**
             * Constructs a new ResourceInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IResourceInfo);

            /** ResourceInfo resourceType. */
            public resourceType: string;

            /** ResourceInfo resourceName. */
            public resourceName: string;

            /** ResourceInfo owner. */
            public owner: string;

            /** ResourceInfo description. */
            public description: string;

            /**
             * Gets the default type url for ResourceInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Help. */
        interface IHelp {

            /** Help links */
            links?: (google.rpc.Help.ILink[]|null);
        }

        /** Represents a Help. */
        class Help implements IHelp {

            /**
             * Constructs a new Help.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IHelp);

            /** Help links. */
            public links: google.rpc.Help.ILink[];

            /**
             * Gets the default type url for Help
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Help {

            /** Properties of a Link. */
            interface ILink {

                /** Link description */
                description?: (string|null);

                /** Link url */
                url?: (string|null);
            }

            /** Represents a Link. */
            class Link implements ILink {

                /**
                 * Constructs a new Link.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.rpc.Help.ILink);

                /** Link description. */
                public description: string;

                /** Link url. */
                public url: string;

                /**
                 * Gets the default type url for Link
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a LocalizedMessage. */
        interface ILocalizedMessage {

            /** LocalizedMessage locale */
            locale?: (string|null);

            /** LocalizedMessage message */
            message?: (string|null);
        }

        /** Represents a LocalizedMessage. */
        class LocalizedMessage implements ILocalizedMessage {

            /**
             * Constructs a new LocalizedMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.ILocalizedMessage);

            /** LocalizedMessage locale. */
            public locale: string;

            /** LocalizedMessage message. */
            public message: string;

            /**
             * Gets the default type url for LocalizedMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Namespace context. */
        namespace context {

            /** Properties of an AttributeContext. */
            interface IAttributeContext {

                /** AttributeContext origin */
                origin?: (google.rpc.context.AttributeContext.IPeer|null);

                /** AttributeContext source */
                source?: (google.rpc.context.AttributeContext.IPeer|null);

                /** AttributeContext destination */
                destination?: (google.rpc.context.AttributeContext.IPeer|null);

                /** AttributeContext request */
                request?: (google.rpc.context.AttributeContext.IRequest|null);

                /** AttributeContext response */
                response?: (google.rpc.context.AttributeContext.IResponse|null);

                /** AttributeContext resource */
                resource?: (google.rpc.context.AttributeContext.IResource|null);

                /** AttributeContext api */
                api?: (google.rpc.context.AttributeContext.IApi|null);
            }

            /** Represents an AttributeContext. */
            class AttributeContext implements IAttributeContext {

                /**
                 * Constructs a new AttributeContext.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.rpc.context.IAttributeContext);

                /** AttributeContext origin. */
                public origin?: (google.rpc.context.AttributeContext.IPeer|null);

                /** AttributeContext source. */
                public source?: (google.rpc.context.AttributeContext.IPeer|null);

                /** AttributeContext destination. */
                public destination?: (google.rpc.context.AttributeContext.IPeer|null);

                /** AttributeContext request. */
                public request?: (google.rpc.context.AttributeContext.IRequest|null);

                /** AttributeContext response. */
                public response?: (google.rpc.context.AttributeContext.IResponse|null);

                /** AttributeContext resource. */
                public resource?: (google.rpc.context.AttributeContext.IResource|null);

                /** AttributeContext api. */
                public api?: (google.rpc.context.AttributeContext.IApi|null);

                /**
                 * Gets the default type url for AttributeContext
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace AttributeContext {

                /** Properties of a Peer. */
                interface IPeer {

                    /** Peer ip */
                    ip?: (string|null);

                    /** Peer port */
                    port?: (number|Long|null);

                    /** Peer labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Peer principal */
                    principal?: (string|null);

                    /** Peer regionCode */
                    regionCode?: (string|null);
                }

                /** Represents a Peer. */
                class Peer implements IPeer {

                    /**
                     * Constructs a new Peer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.rpc.context.AttributeContext.IPeer);

                    /** Peer ip. */
                    public ip: string;

                    /** Peer port. */
                    public port: (number|Long);

                    /** Peer labels. */
                    public labels: { [k: string]: string };

                    /** Peer principal. */
                    public principal: string;

                    /** Peer regionCode. */
                    public regionCode: string;

                    /**
                     * Gets the default type url for Peer
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Api. */
                interface IApi {

                    /** Api service */
                    service?: (string|null);

                    /** Api operation */
                    operation?: (string|null);

                    /** Api protocol */
                    protocol?: (string|null);

                    /** Api version */
                    version?: (string|null);
                }

                /** Represents an Api. */
                class Api implements IApi {

                    /**
                     * Constructs a new Api.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.rpc.context.AttributeContext.IApi);

                    /** Api service. */
                    public service: string;

                    /** Api operation. */
                    public operation: string;

                    /** Api protocol. */
                    public protocol: string;

                    /** Api version. */
                    public version: string;

                    /**
                     * Gets the default type url for Api
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Auth. */
                interface IAuth {

                    /** Auth principal */
                    principal?: (string|null);

                    /** Auth audiences */
                    audiences?: (string[]|null);

                    /** Auth presenter */
                    presenter?: (string|null);

                    /** Auth claims */
                    claims?: (google.protobuf.IStruct|null);

                    /** Auth accessLevels */
                    accessLevels?: (string[]|null);
                }

                /** Represents an Auth. */
                class Auth implements IAuth {

                    /**
                     * Constructs a new Auth.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.rpc.context.AttributeContext.IAuth);

                    /** Auth principal. */
                    public principal: string;

                    /** Auth audiences. */
                    public audiences: string[];

                    /** Auth presenter. */
                    public presenter: string;

                    /** Auth claims. */
                    public claims?: (google.protobuf.IStruct|null);

                    /** Auth accessLevels. */
                    public accessLevels: string[];

                    /**
                     * Gets the default type url for Auth
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Request. */
                interface IRequest {

                    /** Request id */
                    id?: (string|null);

                    /** Request method */
                    method?: (string|null);

                    /** Request headers */
                    headers?: ({ [k: string]: string }|null);

                    /** Request path */
                    path?: (string|null);

                    /** Request host */
                    host?: (string|null);

                    /** Request scheme */
                    scheme?: (string|null);

                    /** Request query */
                    query?: (string|null);

                    /** Request time */
                    time?: (google.protobuf.ITimestamp|null);

                    /** Request size */
                    size?: (number|Long|null);

                    /** Request protocol */
                    protocol?: (string|null);

                    /** Request reason */
                    reason?: (string|null);

                    /** Request auth */
                    auth?: (google.rpc.context.AttributeContext.IAuth|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.rpc.context.AttributeContext.IRequest);

                    /** Request id. */
                    public id: string;

                    /** Request method. */
                    public method: string;

                    /** Request headers. */
                    public headers: { [k: string]: string };

                    /** Request path. */
                    public path: string;

                    /** Request host. */
                    public host: string;

                    /** Request scheme. */
                    public scheme: string;

                    /** Request query. */
                    public query: string;

                    /** Request time. */
                    public time?: (google.protobuf.ITimestamp|null);

                    /** Request size. */
                    public size: (number|Long);

                    /** Request protocol. */
                    public protocol: string;

                    /** Request reason. */
                    public reason: string;

                    /** Request auth. */
                    public auth?: (google.rpc.context.AttributeContext.IAuth|null);

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Response. */
                interface IResponse {

                    /** Response code */
                    code?: (number|Long|null);

                    /** Response size */
                    size?: (number|Long|null);

                    /** Response headers */
                    headers?: ({ [k: string]: string }|null);

                    /** Response time */
                    time?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a Response. */
                class Response implements IResponse {

                    /**
                     * Constructs a new Response.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.rpc.context.AttributeContext.IResponse);

                    /** Response code. */
                    public code: (number|Long);

                    /** Response size. */
                    public size: (number|Long);

                    /** Response headers. */
                    public headers: { [k: string]: string };

                    /** Response time. */
                    public time?: (google.protobuf.ITimestamp|null);

                    /**
                     * Gets the default type url for Response
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Resource. */
                interface IResource {

                    /** Resource service */
                    service?: (string|null);

                    /** Resource name */
                    name?: (string|null);

                    /** Resource type */
                    type?: (string|null);

                    /** Resource labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a Resource. */
                class Resource implements IResource {

                    /**
                     * Constructs a new Resource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.rpc.context.AttributeContext.IResource);

                    /** Resource service. */
                    public service: string;

                    /** Resource name. */
                    public name: string;

                    /** Resource type. */
                    public type: string;

                    /** Resource labels. */
                    public labels: { [k: string]: string };

                    /**
                     * Gets the default type url for Resource
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }

        /** Code enum. */
        enum Code {
            OK = 0,
            CANCELLED = 1,
            UNKNOWN = 2,
            INVALID_ARGUMENT = 3,
            DEADLINE_EXCEEDED = 4,
            NOT_FOUND = 5,
            ALREADY_EXISTS = 6,
            PERMISSION_DENIED = 7,
            UNAUTHENTICATED = 16,
            RESOURCE_EXHAUSTED = 8,
            FAILED_PRECONDITION = 9,
            ABORTED = 10,
            OUT_OF_RANGE = 11,
            UNIMPLEMENTED = 12,
            INTERNAL = 13,
            UNAVAILABLE = 14,
            DATA_LOSS = 15
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a MonitoredResource. */
        interface IMonitoredResource {

            /** MonitoredResource type */
            type?: (string|null);

            /** MonitoredResource labels */
            labels?: ({ [k: string]: string }|null);
        }

        /** Represents a MonitoredResource. */
        class MonitoredResource implements IMonitoredResource {

            /**
             * Constructs a new MonitoredResource.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMonitoredResource);

            /** MonitoredResource type. */
            public type: string;

            /** MonitoredResource labels. */
            public labels: { [k: string]: string };

            /**
             * Gets the default type url for MonitoredResource
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
