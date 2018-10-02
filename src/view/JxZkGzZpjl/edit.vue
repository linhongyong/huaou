<template>
    <Form :model="formItem" :label-width="140">
      <FormItem label="选择模板">
            <Select v-model="formItem.templateId">
                <Option v-bind:value="item.id" v-for="item in templateList" v-bind:key="item">{{ item.buildCompany }}</Option>
            </Select>
        </FormItem>
      <Row>
            <Col span="6">
                <FormItem label="天气">
                <Input v-model="formItem.weather" placeholder=""></Input>
            </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="施工单位">
                <Input v-model="formItem.buildCompany" placeholder=""></Input>
            </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="楼栋号">
                <Input v-model="formItem.building" placeholder=""></Input>
            </FormItem>
            </Col>
            <!--<Col span="6">
                <FormItem label="桩号">
                <Input v-model="formItem.pile" placeholder=""></Input>
            </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="监理开始时间">
                <Input v-model="formItem.startTime" placeholder=""></Input>
            </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="监理结束时间">
                <Input v-model="formItem.endTime" placeholder=""></Input>
            </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="钻机型号">
                <Input v-model="formItem.drillModel" placeholder=""></Input>
            </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="钻机工作状态">
                <Input v-model="formItem.workState" placeholder=""></Input>
            </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="主钢筋">
                <Input v-model="formItem.mainBar" placeholder=""></Input>
            </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="箍钢筋">
                <Input v-model="formItem.circularBar" placeholder=""></Input>
            </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="加强钢筋">
                <Input v-model="formItem.strongBar" placeholder=""></Input>
            </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="钢筋笼数量（节）">
                <Input v-model="formItem.barCageCount" placeholder=""></Input>
            </FormItem>
            </Col>  -->
        </Row>
        <FormItem>
            <Button type="primary" @click="handleSubmit()">确定</Button>
            <Button style="margin-left: 8px"  @click="handleReset()">取消</Button>
        </FormItem>
        <!--<FormItem label="Input">
            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Select">
            <Select v-model="formItem.select">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        <FormItem label="DatePicker">
            <Row>
                <Col span="11">
                    <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                    <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="Radio">
            <RadioGroup v-model="formItem.radio">
                <Radio label="male">Male</Radio>
                <Radio label="female">Female</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="Checkbox">
            <CheckboxGroup v-model="formItem.checkbox">
                <Checkbox label="Eat"></Checkbox>
                <Checkbox label="Sleep"></Checkbox>
                <Checkbox label="Run"></Checkbox>
                <Checkbox label="Movie"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="Switch">
            <i-switch v-model="formItem.switch" size="large">
                <span slot="open">On</span>
                <span slot="close">Off</span>
            </i-switch>
        </FormItem>
        <FormItem label="Slider">
            <Slider v-model="formItem.slider" range></Slider>
        </FormItem>
        <FormItem label="Text">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem>
            <Button type="primary">Submit</Button>
            <Button style="margin-left: 8px">Cancel</Button>
        </FormItem>-->
    </Form>
</template>
<script>
import { updateJxZkGzzPzjl } from '@/api/JxZkGzZpjl'
import { getJxZkGzzPzjlTemplateList } from '@/api/jxZkGzzPzjlTemplate'
export default {
  data () {
    return {
      templateList: []
    }
  },
  props: {
    formItem: {
      type: Object,
      default () {
        return {
          templateId: 0, // 模板id
          weather: '',
          buildCompany: '',
          building: 0
        }
      }
    }
  },
  methods: {
    handleSubmit () {
      let that = this
      that.formItem.templateId = that.formItem.templateId ? this.formItem.templateId : 2
      updateJxZkGzzPzjl(this.formItem).then(res => {
        console.log('**********************formItem************')
        console.log(res)
        that.$emit('editModalClose', true)
      }
      )
    },
    handleReset (formItem) {
      // this.$refs[name].resetFields();
      this.$emit('editModalClose', true)
    }
  },
  mounted () {
    getJxZkGzzPzjlTemplateList().then(res => {
      console.log('-------------------------')
      console.log(res.data)
      this.templateList = res.data.result.list
    })
  }
}
</script>
