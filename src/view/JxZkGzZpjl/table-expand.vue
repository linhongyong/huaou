<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>
<template>
    <div>
        <Row class="expand-row">
            <Col span="4">
                <span class="expand-key">监理开始时间 : </span>
                <span class="expand-value">{{ row.startTime }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">监理结束时间 : </span>
                <span class="expand-value">{{ row.interest }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">钻机型号 : </span>
                <span class="expand-value">{{ row.drillModel }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">钻机工作状态 : </span>
                <span class="expand-value">{{ row.workState }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">主钢筋 : </span>
                <span class="expand-value">{{ row.mainBar }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">箍钢筋 : </span>
                <span class="expand-value">{{ row.circularBar }}</span>
            </Col>
        </Row>
        <Row class="expand-row">
            <Col span="4">
                <span class="expand-key">加强钢筋 : </span>
                <span class="expand-value">{{ row.strongBar }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">钢筋笼数量（节） : </span>
                <span class="expand-value">{{ row.barCageCount }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">钢筋长度 : </span>
                <span class="expand-value">{{ row.length }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">吊筋长度 : </span>
                <span class="expand-value">{{ row.suspensionBarLength }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">焊接结论 : </span>
                <span class="expand-value">{{ row.weldingResult }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">桩径 : </span>
                <span class="expand-value">{{ row.pileDiameter }}</span>
            </Col>
        </Row>
        <Row class="expand-row">
            <Col span="4">
                <span class="expand-key">设计桩顶标高 : </span>
                <span class="expand-value">{{ row.pileTopHeight }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">开孔时间 : </span>
                <span class="expand-value">{{ row.openTime }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">终孔时间 : </span>
                <span class="expand-value">{{ row.stopTime }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">实际孔深 : </span>
                <span class="expand-value">{{ row.actualDeep }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">有效桩长 : </span>
                <span class="expand-value">{{ row.validPileLength }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">下钢筋笼时间起 : </span>
                <span class="expand-value">{{ row.dropCageStartTime }}</span>
            </Col>
        </Row>
        <Row class="expand-row">
            <Col span="4">
                <span class="expand-key">下钢筋笼时间止 : </span>
                <span class="expand-value">{{ row.dropCageEndTime }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">二次清孔时间起 : </span>
                <span class="expand-value">{{ row.secondCleanStartTime }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">二次清孔时间止 : </span>
                <span class="expand-value">{{ row.secondCleanEndTime }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">沉渣厚度 : </span>
                <span class="expand-value">{{ row.sedimentHeight }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">泥浆比重 : </span>
                <span class="expand-value">{{ row.slurryProp }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">砼强度等级 : </span>
                <span class="expand-value">{{ row.concreteStrongLevel }}</span>
            </Col>
        </Row>
        <Row class="expand-row">
            <Col span="4">
                <span class="expand-key">灌注时间起 : </span>
                <span class="expand-value">{{ row.perfusionStartTime }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">灌注时间止 : </span>
                <span class="expand-value">{{ row.perfusionEndTime }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">设计坍落度 : </span>
                <span class="expand-value">{{ row.designSlump }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">实测坍落度 : </span>
                <span class="expand-value">{{ row.actualSlump }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">砼理论方量 : </span>
                <span class="expand-value">{{ row.theoryVolume }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">砼实灌方量 : </span>
                <span class="expand-value">{{ row.actualVolume }}</span>
            </Col>
        </Row>
        <Row class="expand-row">
            <Col span="4">
                <span class="expand-key">充盈系数 : </span>
                <span class="expand-value">{{ row.fillingCoefficient }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">试块制作组数 : </span>
                <span class="expand-value">{{ row.sampleMaking }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">站旁监理人员id : </span>
                <span class="expand-value">{{ row.superId }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">桩长 : </span>
                <span class="expand-value">{{ row.pileLength }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">钻地面标高 : </span>
                <span class="expand-value">{{ row.groundLevel }}</span>
            </Col>
            <Col span="4">
                <span class="expand-key">发现的问题及处理情况 : </span>
                <span class="expand-value">{{ row.problemContent }}</span>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
  props: {
    row: Object
  }
};
</script>
