const __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
const Query = /** @class */ (function () {
  class Query {
    constructor() {
      this.joins = [];
      this.conditionList = [];
      this.orderFields = {};
    }
    join(targetType, joinField, targetField, alias) {
      var returnFields = [];
      for (var _i = 4; _i < arguments.length; _i++) {
        returnFields[_i - 4] = arguments[_i];
      }
      /* add */ this.joins.push(
        new (__Function.prototype.bind.apply(
          Query.EntityJoin,
          [null, targetType, joinField, targetField, alias].concat(returnFields)
        ))()
      ) > 0;
      return this;
    }
    and$java_lang_String(fieldName) {
      return this.and$java_lang_String$java_lang_String("", fieldName);
    }
    and$java_lang_String$java_lang_String(openBrackets, fieldName) {
      return new Query.ConditionBuilder(
        openBrackets,
        Query.QueryCondition.LOGICAL_OPERATOR.AND,
        fieldName,
        this
      );
    }
    and(openBrackets, fieldName) {
      if (
        (typeof openBrackets === "string" || openBrackets === null) &&
        (typeof fieldName === "string" || fieldName === null)
      ) {
        return this.and$java_lang_String$java_lang_String(
          openBrackets,
          fieldName
        );
      } else if (
        (typeof openBrackets === "string" || openBrackets === null) &&
        fieldName === undefined
      ) {
        return this.and$java_lang_String(openBrackets);
      } else throw new Error("invalid overload");
    }
    or$java_lang_String(fieldName) {
      return this.or$java_lang_String$java_lang_String("", fieldName);
    }
    or$java_lang_String$java_lang_String(openBrackets, fieldName) {
      return new Query.ConditionBuilder(
        openBrackets,
        Query.QueryCondition.LOGICAL_OPERATOR.OR,
        fieldName,
        this
      );
    }
    or(openBrackets, fieldName) {
      if (
        (typeof openBrackets === "string" || openBrackets === null) &&
        (typeof fieldName === "string" || fieldName === null)
      ) {
        return this.or$java_lang_String$java_lang_String(
          openBrackets,
          fieldName
        );
      } else if (
        (typeof openBrackets === "string" || openBrackets === null) &&
        fieldName === undefined
      ) {
        return this.or$java_lang_String(openBrackets);
      } else throw new Error("invalid overload");
    }
    orderBy$java_lang_String_A() {
      var fields = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        fields[_i] = arguments[_i];
      }
      return this.orderBy$boolean$java_lang_String_A.apply(
        this,
        [false].concat(fields)
      );
    }
    orderBy$boolean$java_lang_String_A(isDescending) {
      // var _this = this;
      // var fields = [];
      // for (var _i = 1; _i < arguments.length; _i++) {
      //   fields[_i - 1] = arguments[_i];
      // }
      // java.util.Arrays.stream(fields).forEach(function (field) {
      //   /* put */ return (_this.getOrderFields()[field] = isDescending);
      // });
      return this;
    }
    orderBy(isDescending) {
      var fields = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        fields[_i - 1] = arguments[_i];
      }
      if (
        (typeof isDescending === "boolean" || isDescending === null) &&
        ((fields != null &&
          fields instanceof Array &&
          (fields.length == 0 ||
            fields[0] == null ||
            typeof fields[0] === "string")) ||
          fields === null)
      ) {
        return this.orderBy$boolean$java_lang_String_A.apply(
          this,
          __spreadArrays([isDescending], fields)
        );
      } else if (
        (((isDescending != null &&
          isDescending instanceof Array &&
          (isDescending.length == 0 ||
            isDescending[0] == null ||
            typeof isDescending[0] === "string")) ||
          isDescending === null) &&
          fields === undefined) ||
        fields.length === 0
      ) {
        return this.orderBy$java_lang_String_A.apply(this, isDescending);
      } else throw new Error("invalid overload");
    }
    getConditionList() {
      if (this.conditionList == null) {
        this.conditionList = [];
      }
      return this.conditionList;
    }
    getOrderFields() {
      if (this.orderFields == null) {
        this.orderFields = {};
      }
      return this.orderFields;
    }
  }
  return Query;
})();
Query["__class"] = "Query";
(function (Query) {
  var ConditionBuilder = /** @class */ (function () {
    class ConditionBuilder {
      constructor(openBrackets, logical, fieldName, query) {
        if (this.query === undefined) {
          this.query = null;
        }
        if (this.openBrackets === undefined) {
          this.openBrackets = null;
        }
        if (this.logical === undefined) {
          this.logical = null;
        }
        if (this.fieldName === undefined) {
          this.fieldName = null;
        }
        this.query = query;
        this.logical = logical;
        this.openBrackets = openBrackets;
        this.fieldName = fieldName;
        // var pattern = java.util.regex.Pattern.compile("\\(+");
        // var matcher = pattern.matcher(openBrackets);
        // if (matcher.find()) {
        //   this.openBrackets = matcher.group(0);
        // }
      }
      eq(fieldValue, closeBrackets) {
        if (closeBrackets === void 0) {
          closeBrackets = "";
        }
        return this.build(
          fieldValue,
          Query.QueryCondition.OPERATOR.EQUALS,
          closeBrackets
        );
      }
      notEq(fieldValue, closeBrackets) {
        if (closeBrackets === void 0) {
          closeBrackets = "";
        }
        return this.build(
          fieldValue,
          Query.QueryCondition.OPERATOR.NOT_EQUALS,
          closeBrackets
        );
      }
      eqIgnoreCase(fieldValue, closeBrackets) {
        if (closeBrackets === void 0) {
          closeBrackets = "";
        }
        return this.build(
          fieldValue,
          Query.QueryCondition.OPERATOR.EQUALS_IGNORE_CASE,
          closeBrackets
        );
      }
      startsWith(fieldValue, closeBrackets) {
        if (closeBrackets === void 0) {
          closeBrackets = "";
        }
        return this.build(
          fieldValue,
          Query.QueryCondition.OPERATOR.STARTS_WITH,
          closeBrackets
        );
      }
      endsWith(fieldValue, closeBrackets) {
        if (closeBrackets === void 0) {
          closeBrackets = "";
        }
        return this.build(
          fieldValue,
          Query.QueryCondition.OPERATOR.ENDS_WITH,
          closeBrackets
        );
      }
      match(fieldValue, closeBrackets) {
        if (closeBrackets === void 0) {
          closeBrackets = "";
        }
        return this.build(
          fieldValue,
          Query.QueryCondition.OPERATOR.MATCH,
          closeBrackets
        );
      }
      greaterThan(fieldValue, closeBrackets) {
        if (closeBrackets === void 0) {
          closeBrackets = "";
        }
        return this.build(
          fieldValue,
          Query.QueryCondition.OPERATOR.GREATER_THAN,
          closeBrackets
        );
      }
      greaterThanOrEq(fieldValue, closeBrackets) {
        if (closeBrackets === void 0) {
          closeBrackets = "";
        }
        return this.build(
          fieldValue,
          Query.QueryCondition.OPERATOR.GREATER_THAN_OR_EQUALS,
          closeBrackets
        );
      }
      lessThan(fieldValue, closeBrackets) {
        if (closeBrackets === void 0) {
          closeBrackets = "";
        }
        return this.build(
          fieldValue,
          Query.QueryCondition.OPERATOR.LESS_THAN,
          closeBrackets
        );
      }
      lessThanOrEq(fieldValue, closeBrackets) {
        if (closeBrackets === void 0) {
          closeBrackets = "";
        }
        return this.build(
          fieldValue,
          Query.QueryCondition.OPERATOR.LESS_THAN_OR_EQUALS,
          closeBrackets
        );
      }
      build(fieldValue, operator, closeBrackets) {
        /* add */ this.query
          .getConditionList()
          .push(
            new Query.QueryCondition(
              this.logical,
              this.openBrackets,
              this.fieldName,
              operator,
              fieldValue,
              closeBrackets
            )
          ) > 0;
        return this.query;
      }
    }
    return ConditionBuilder;
  })();
  Query.ConditionBuilder = ConditionBuilder;
  ConditionBuilder["__class"] = "Query.ConditionBuilder";
  var QueryCondition = /** @class */ (function () {
    class QueryCondition {
      constructor(
        logicalOperator,
        openBrackets,
        fieldName,
        operator,
        fieldValue,
        closeBrackets
      ) {
        if (this.logicalOperator === undefined) {
          this.logicalOperator = null;
        }
        if (this.openBrackets === undefined) {
          this.openBrackets = null;
        }
        if (this.closeBrackets === undefined) {
          this.closeBrackets = null;
        }
        if (this.operator === undefined) {
          this.operator = null;
        }
        if (this.fieldName === undefined) {
          this.fieldName = null;
        }
        if (this.fieldValue === undefined) {
          this.fieldValue = null;
        }
        this.logicalOperator = logicalOperator;
        this.openBrackets = openBrackets;
        this.fieldName = fieldName;
        this.operator = operator;
        this.fieldValue = fieldValue;
        this.closeBrackets = closeBrackets;
      }
    }
    return QueryCondition;
  })();
  Query.QueryCondition = QueryCondition;
  QueryCondition["__class"] = "Query.QueryCondition";
  (function (QueryCondition) {
    var OPERATOR;
    (function (OPERATOR) {
      OPERATOR[(OPERATOR["EQUALS"] = 0)] = "EQUALS";
      OPERATOR[(OPERATOR["EQUALS_IGNORE_CASE"] = 1)] = "EQUALS_IGNORE_CASE";
      OPERATOR[(OPERATOR["NOT_EQUALS"] = 2)] = "NOT_EQUALS";
      OPERATOR[(OPERATOR["GREATER_THAN"] = 3)] = "GREATER_THAN";
      OPERATOR[(OPERATOR["LESS_THAN"] = 4)] = "LESS_THAN";
      OPERATOR[(OPERATOR["GREATER_THAN_OR_EQUALS"] = 5)] =
        "GREATER_THAN_OR_EQUALS";
      OPERATOR[(OPERATOR["LESS_THAN_OR_EQUALS"] = 6)] = "LESS_THAN_OR_EQUALS";
      OPERATOR[(OPERATOR["STARTS_WITH"] = 7)] = "STARTS_WITH";
      OPERATOR[(OPERATOR["ENDS_WITH"] = 8)] = "ENDS_WITH";
      OPERATOR[(OPERATOR["MATCH"] = 9)] = "MATCH";
    })((OPERATOR = QueryCondition.OPERATOR || (QueryCondition.OPERATOR = {})));
    var LOGICAL_OPERATOR;
    (function (LOGICAL_OPERATOR) {
      LOGICAL_OPERATOR[(LOGICAL_OPERATOR["AND"] = 0)] = "AND";
      LOGICAL_OPERATOR[(LOGICAL_OPERATOR["OR"] = 1)] = "OR";
    })(
      (LOGICAL_OPERATOR =
        QueryCondition.LOGICAL_OPERATOR ||
        (QueryCondition.LOGICAL_OPERATOR = {}))
    );
  })((QueryCondition = Query.QueryCondition || (Query.QueryCondition = {})));
  var EntityJoin = /** @class */ (function () {
    class EntityJoin {
      constructor(__parent, targetType, joinField, targetField, alias) {
        var returnFields = [];
        for (var _i = 5; _i < arguments.length; _i++) {
          returnFields[_i - 5] = arguments[_i];
        }
        this.__parent = __parent;
        if (this.joinField === undefined) {
          this.joinField = null;
        }
        if (this.targetType === undefined) {
          this.targetType = null;
        }
        if (this.targetField === undefined) {
          this.targetField = null;
        }
        if (this.alias === undefined) {
          this.alias = null;
        }
        this.returnFields = [];
        this.targetType = targetType;
        this.joinField = joinField;
        this.targetField = targetField;
        this.alias = alias;
        /* addAll */ (function (l1, l2) {
          return l1.push.apply(l1, l2);
        })(this.returnFields, /* asList */ returnFields.slice(0));
      }
      getJoinField() {
        return this.joinField;
      }
      getTargetType() {
        return this.targetType;
      }
      getTargetField() {
        return this.targetField;
      }
      getAlias() {
        return this.alias;
      }
      getReturnFields() {
        return this.returnFields;
      }
    }
    return EntityJoin;
  })();
  Query.EntityJoin = EntityJoin;
  EntityJoin["__class"] = "Query.EntityJoin";
})(Query || (Query = {}));
var __Function = Function;
